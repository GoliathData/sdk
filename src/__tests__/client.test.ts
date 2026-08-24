import { afterEach, describe, expect, it, vi } from 'vitest'
import { GOLIATH_API_PATH, GoliathClientCore } from '../runtime/client'
import {
  type GoliathApiError,
  GoliathAuthenticationError,
  GoliathBadRequestError,
  GoliathConcurrencyLimitError,
  GoliathIdempotencyConflictError,
  GoliathNetworkError,
  GoliathOperationError,
  GoliathPermissionError,
  GoliathRateLimitError,
  GoliathServerError,
} from '../runtime/errors'
import type { IdempotentRequestOptions } from '../runtime/types'

// Exposes the protected request() with an explicit operation type, the way the
// generated per-domain methods will call it.
class TestClient extends GoliathClientCore {
  query<TData>(
    operationId: string,
    variables?: Record<string, unknown>,
    options?: IdempotentRequestOptions
  ): Promise<TData> {
    return this.request(operationId, variables, options, { operationType: 'query' })
  }
}

const BASE_URL = 'https://api.example.com'

function jsonResponse(status: number, body: unknown, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', ...headers } })
}

function rejection(status: number, code: string, message = 'nope', headers: Record<string, string> = {}): Response {
  return jsonResponse(status, { errors: [{ message, extensions: { code } }] }, headers)
}

function makeClient(fetchImpl: typeof globalThis.fetch, overrides: Record<string, unknown> = {}): TestClient {
  return new TestClient({ apiKey: 'gsk_test', baseUrl: BASE_URL, fetch: fetchImpl, ...overrides })
}

afterEach(() => {
  vi.useRealTimers()
})

describe('transport', () => {
  it('POSTs { operationId, variables } with the bearer key to /api/v1/graphql', async () => {
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse(200, { data: { ok: true } }))
    const client = makeClient(fetchMock)

    await client.execute('getContact', { contactId: 'c1' })

    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit]
    expect(url).toBe(`${BASE_URL}${GOLIATH_API_PATH}`)
    expect(init.method).toBe('POST')
    expect(init.headers).toMatchObject({
      authorization: 'Bearer gsk_test',
      'content-type': 'application/json',
    })
    expect(JSON.parse(init.body as string)).toEqual({ operationId: 'getContact', variables: { contactId: 'c1' } })
  })

  it('normalizes a trailing slash on baseUrl and defaults variables to {}', async () => {
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse(200, { data: {} }))
    const client = makeClient(fetchMock, { baseUrl: `${BASE_URL}/` })

    await client.execute('listCommunicationChannels')

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit]
    expect(url).toBe(`${BASE_URL}${GOLIATH_API_PATH}`)
    expect(JSON.parse(init.body as string).variables).toEqual({})
  })

  it('returns the data payload on success', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(jsonResponse(200, { data: { dealQuery: { findDeals: { deals: [] } } } }))
    const client = makeClient(fetchMock)

    const data = await client.execute('findDeals', { limit: 5 })

    expect(data).toEqual({ dealQuery: { findDeals: { deals: [] } } })
  })

  it('requires apiKey and baseUrl', () => {
    expect(() => new TestClient({ apiKey: '', baseUrl: BASE_URL })).toThrow(/apiKey/)
    expect(() => new TestClient({ apiKey: 'gsk_x', baseUrl: '' })).toThrow(/baseUrl/)
  })
})

describe('executed-operation errors (200 with errors)', () => {
  it('throws GoliathOperationError carrying every error and any partial data', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      jsonResponse(200, {
        data: { partial: true },
        errors: [
          { message: 'Contact not found', extensions: { code: 'BAD_USER_INPUT' } },
          { message: 'Something else', extensions: { code: 'INTERNAL_SERVER_ERROR' } },
        ],
      })
    )
    const client = makeClient(fetchMock)

    const error = await client.execute('getContact', { contactId: 'bad' }).catch((e: unknown) => e)

    expect(error).toBeInstanceOf(GoliathOperationError)
    const opError = error as GoliathOperationError
    expect(opError.operationId).toBe('getContact')
    expect(opError.errors).toEqual([
      { message: 'Contact not found', code: 'BAD_USER_INPUT' },
      { message: 'Something else', code: 'INTERNAL_SERVER_ERROR' },
    ])
    expect(opError.data).toEqual({ partial: true })
  })
})

describe('gateway rejection mapping', () => {
  it.each([
    [401, 'unauthorized', GoliathAuthenticationError],
    [403, 'insufficient_scope', GoliathPermissionError],
    [403, 'forbidden', GoliathPermissionError],
    [400, 'bad_request', GoliathBadRequestError],
    [400, 'unknown_operation', GoliathBadRequestError],
    [400, 'raw_query_forbidden', GoliathBadRequestError],
    [500, 'internal_error', GoliathServerError],
  ])('%s %s → %o', async (status, code, expectedClass) => {
    const fetchMock = vi.fn().mockResolvedValue(rejection(status, code))
    const client = makeClient(fetchMock, { maxRetries: 0 })

    const error = await client.execute('getContact').catch((e: unknown) => e)

    expect(error).toBeInstanceOf(expectedClass)
    const apiError = error as GoliathApiError
    expect(apiError.status).toBe(status)
    expect(apiError.code).toBe(code)
    expect(apiError.message).toBe('nope')
  })

  it('maps 429 rate_limited to GoliathRateLimitError with retryAfterSeconds', async () => {
    const fetchMock = vi.fn().mockResolvedValue(rejection(429, 'rate_limited', 'slow down', { 'retry-after': '7' }))
    const client = makeClient(fetchMock, { maxRetries: 0 })

    const error = await client.execute('getTeamAnalyticsOverview').catch((e: unknown) => e)

    expect(error).toBeInstanceOf(GoliathRateLimitError)
    expect((error as GoliathRateLimitError).retryAfterSeconds).toBe(7)
  })

  it('maps 429 concurrency_limit to GoliathConcurrencyLimitError', async () => {
    const fetchMock = vi.fn().mockResolvedValue(rejection(429, 'concurrency_limit'))
    const client = makeClient(fetchMock, { maxRetries: 0 })

    await expect(client.execute('getContact')).rejects.toBeInstanceOf(GoliathConcurrencyLimitError)
  })

  it('falls back to a generic error when the rejection body is not JSON', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response('gateway exploded', { status: 502 }))
    const client = makeClient(fetchMock, { maxRetries: 0 })

    const error = await client.execute('getContact').catch((e: unknown) => e)

    expect(error).toBeInstanceOf(GoliathServerError)
    expect((error as GoliathApiError).message).toBe('HTTP 502')
  })
})

describe('retry behavior', () => {
  it('retries 429 rate_limited honoring Retry-After exactly, for any operation', async () => {
    vi.useFakeTimers()
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(rejection(429, 'rate_limited', 'slow down', { 'retry-after': '3' }))
      .mockResolvedValueOnce(jsonResponse(200, { data: { ok: true } }))
    const client = makeClient(fetchMock)

    const promise = client.execute('createContact', { to: '+13235550100' })

    await vi.advanceTimersByTimeAsync(2999)
    expect(fetchMock).toHaveBeenCalledTimes(1)
    await vi.advanceTimersByTimeAsync(1)
    await expect(promise).resolves.toEqual({ ok: true })
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it('retries 429 concurrency_limit with backoff', async () => {
    vi.useFakeTimers()
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(rejection(429, 'concurrency_limit'))
      .mockResolvedValueOnce(jsonResponse(200, { data: { ok: true } }))
    const client = makeClient(fetchMock)

    const promise = client.execute('getContact')
    await vi.advanceTimersByTimeAsync(500)

    await expect(promise).resolves.toEqual({ ok: true })
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it('exhausts maxRetries then throws the rate-limit error', async () => {
    vi.useFakeTimers()
    const fetchMock = vi
      .fn()
      .mockImplementation(async () => rejection(429, 'rate_limited', 'slow down', { 'retry-after': '1' }))
    const client = makeClient(fetchMock, { maxRetries: 2 })

    const promise = client.execute('getContact')
    const assertion = expect(promise).rejects.toBeInstanceOf(GoliathRateLimitError)
    await vi.advanceTimersByTimeAsync(10_000)

    await assertion
    expect(fetchMock).toHaveBeenCalledTimes(3)
  })

  it('never retries a 5xx for a mutation without an idempotency key', async () => {
    const fetchMock = vi.fn().mockResolvedValue(rejection(500, 'internal_error'))
    const client = makeClient(fetchMock)

    await expect(client.execute('createDeal', { name: 'x' })).rejects.toBeInstanceOf(GoliathServerError)
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('retries a 5xx for a query', async () => {
    vi.useFakeTimers()
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(rejection(500, 'internal_error'))
      .mockResolvedValueOnce(jsonResponse(200, { data: { ok: true } }))
    const client = makeClient(fetchMock)

    const promise = client.query('findDeals', { limit: 5 })
    await vi.advanceTimersByTimeAsync(500)

    await expect(promise).resolves.toEqual({ ok: true })
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it('retries a 5xx for a mutation WITH an idempotency key (the gateway dedupes the re-send)', async () => {
    vi.useFakeTimers()
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(rejection(500, 'internal_error'))
      .mockResolvedValueOnce(jsonResponse(200, { data: { ok: true } }))
    const client = makeClient(fetchMock)

    const promise = client.execute('createContact', { to: '+13235550100' }, { idempotencyKey: 'key-1' })
    await vi.advanceTimersByTimeAsync(500)

    await expect(promise).resolves.toEqual({ ok: true })
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it('never retries a network failure for a mutation without an idempotency key', async () => {
    const fetchMock = vi.fn().mockRejectedValue(new TypeError('fetch failed'))
    const client = makeClient(fetchMock)

    await expect(client.execute('createDeal')).rejects.toBeInstanceOf(GoliathNetworkError)
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('retries a network failure for a query', async () => {
    vi.useFakeTimers()
    const fetchMock = vi
      .fn()
      .mockRejectedValueOnce(new TypeError('fetch failed'))
      .mockResolvedValueOnce(jsonResponse(200, { data: { ok: true } }))
    const client = makeClient(fetchMock)

    const promise = client.query('findDeals')
    await vi.advanceTimersByTimeAsync(500)

    await expect(promise).resolves.toEqual({ ok: true })
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it('retries 409 idempotency_conflict only when an idempotency key was sent', async () => {
    vi.useFakeTimers()
    const conflictThenSuccess = vi
      .fn()
      .mockResolvedValueOnce(rejection(409, 'idempotency_conflict'))
      .mockResolvedValueOnce(jsonResponse(200, { data: { ok: true } }))
    const withKey = makeClient(conflictThenSuccess)
    const promise = withKey.execute('createContact', {}, { idempotencyKey: 'key-1' })
    await vi.advanceTimersByTimeAsync(500)
    await expect(promise).resolves.toEqual({ ok: true })
    expect(conflictThenSuccess).toHaveBeenCalledTimes(2)

    const conflictOnly = vi.fn().mockImplementation(async () => rejection(409, 'idempotency_conflict'))
    const withoutKey = makeClient(conflictOnly)
    await expect(withoutKey.execute('createContact')).rejects.toBeInstanceOf(GoliathIdempotencyConflictError)
    expect(conflictOnly).toHaveBeenCalledTimes(1)
  })
})

describe('idempotency', () => {
  it('sends the Idempotency-Key header when provided and omits it otherwise', async () => {
    const fetchMock = vi.fn().mockImplementation(async () => jsonResponse(200, { data: {} }))
    const client = makeClient(fetchMock)

    await client.execute('createContact', {}, { idempotencyKey: 'order-123' })
    await client.execute('createContact', {})

    const withKey = (fetchMock.mock.calls[0][1] as RequestInit).headers as Record<string, string>
    const withoutKey = (fetchMock.mock.calls[1][1] as RequestInit).headers as Record<string, string>
    expect(withKey['idempotency-key']).toBe('order-123')
    expect('idempotency-key' in withoutKey).toBe(false)
  })

  it('surfaces Idempotency-Replayed and the retry count through onMeta', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(jsonResponse(200, { data: { ok: true } }, { 'idempotency-replayed': 'true' }))
    const client = makeClient(fetchMock)
    const onMeta = vi.fn()

    await client.execute('createContact', {}, { idempotencyKey: 'order-123', onMeta })

    expect(onMeta).toHaveBeenCalledExactlyOnceWith({ status: 200, replayed: true, retries: 0 })
  })

  it('fires onMeta with replayed=true even when the replayed stored body carries errors', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(
        jsonResponse(
          200,
          { data: null, errors: [{ message: 'Contact is Do-Not-Contact', extensions: { code: 'FORBIDDEN' } }] },
          { 'idempotency-replayed': 'true' }
        )
      )
    const client = makeClient(fetchMock)
    const onMeta = vi.fn()

    await expect(client.execute('createContact', {}, { idempotencyKey: 'order-123', onMeta })).rejects.toBeInstanceOf(
      GoliathOperationError
    )

    expect(onMeta).toHaveBeenCalledExactlyOnceWith({ status: 200, replayed: true, retries: 0 })
  })
})
