// The transport core under the generated client: one persisted-operation call
// over POST /api/v1/graphql, with auth, timeout, typed errors, retries, and
// idempotency-key passthrough. The caller sends { operationId, variables } —
// never GraphQL — so this package has zero runtime dependencies.
//
// Retry policy (matches the gateway's semantics):
//   - 429 rate_limited / concurrency_limit: retried for ANY operation — both are
//     pre-execution rejections (nothing ran). Retry-After is honored exactly.
//   - Network errors, timeouts, and 5xx: retried only when a retry cannot
//     double-fire a side effect — queries, or mutations sent with an
//     Idempotency-Key (the gateway dedupes the re-send).
//   - 409 idempotency_conflict: the original request is still in flight; retried
//     (with the same key) so the caller receives its stored result.
//   - Everything else throws immediately.

import {
  apiErrorFrom,
  GoliathNetworkError,
  GoliathOperationError,
  GoliathRateLimitError,
  GoliathTimeoutError,
} from './errors'
import { backoffDelayMs, DEFAULT_MAX_RETRIES, sleep } from './retry'
import type { GoliathClientOptions, IdempotentRequestOptions } from './types'

export const GOLIATH_API_PATH = '/api/v1/graphql'

// baseUrl is always caller-supplied — the SDK ships no default host. Which host to
// hit (production, staging, a sandbox) is deployment configuration that belongs to
// the caller; the production host is documented in the Goliath help docs.
const DEFAULT_TIMEOUT_MS = 60_000

type WireError = { message?: unknown; extensions?: { code?: unknown } }

type OperationMeta = {
  // Decides side-effect retry safety: a query can always be re-sent; a mutation
  // only when an Idempotency-Key makes the re-send a dedupe instead of a repeat.
  operationType: 'query' | 'mutation'
}

export class GoliathClientCore {
  private readonly apiKey: string
  private readonly baseUrl: string
  private readonly fetchImpl: typeof globalThis.fetch
  private readonly timeoutMs: number
  private readonly maxRetries: number

  constructor(options: GoliathClientOptions) {
    if (!options.apiKey) throw new Error('GoliathClient: apiKey is required')
    if (!options.baseUrl)
      throw new Error('GoliathClient: baseUrl is required (the API host, provided by the Goliath team)')
    this.apiKey = options.apiKey
    this.baseUrl = options.baseUrl.replace(/\/+$/, '')
    this.fetchImpl = options.fetch ?? globalThis.fetch
    this.timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS
    this.maxRetries = options.maxRetries ?? DEFAULT_MAX_RETRIES
  }

  // Untyped escape hatch: run any operation from the catalog by id — useful for
  // operations added to the API before this SDK release. Treated as a mutation
  // for retry purposes (the conservative default); prefer the generated typed
  // methods, which know each operation's real type.
  execute<TData = Record<string, unknown>>(
    operationId: string,
    variables?: Record<string, unknown>,
    options?: IdempotentRequestOptions
  ): Promise<TData> {
    return this.request(operationId, variables, options, { operationType: 'mutation' })
  }

  protected async request<TData>(
    operationId: string,
    variables: Record<string, unknown> | undefined,
    options: IdempotentRequestOptions | undefined,
    meta: OperationMeta
  ): Promise<TData> {
    const idempotencyKey = options?.idempotencyKey
    const signal = options?.signal
    const sideEffectRetrySafe = meta.operationType === 'query' || idempotencyKey !== undefined

    let attempt = 0
    for (;;) {
      let response: Response
      try {
        response = await this.fetchImpl(
          `${this.baseUrl}${GOLIATH_API_PATH}`,
          this.buildRequestInit({ operationId, variables, idempotencyKey, signal })
        )
      } catch (err) {
        // A caller-initiated abort is not a failure of ours — rethrow untouched.
        if (signal?.aborted) throw err
        const wrapped = wrapTransportError(operationId, err, this.timeoutMs)
        if (sideEffectRetrySafe && attempt < this.maxRetries) {
          await sleep(backoffDelayMs(attempt, null), signal)
          attempt += 1
          continue
        }
        throw wrapped
      }

      if (response.status === 200) {
        return await readSuccessBody<TData>(operationId, response, options, attempt)
      }

      const { code, message } = await parseRejection(response)
      const retryAfterSeconds = parseRetryAfter(response.headers.get('retry-after'))
      const error = apiErrorFrom(response.status, code, message, retryAfterSeconds)

      const retryable = isRetryableRejection(response.status, { idempotencyKey, sideEffectRetrySafe })
      if (retryable && attempt < this.maxRetries) {
        const hinted = error instanceof GoliathRateLimitError ? error.retryAfterSeconds : null
        await sleep(backoffDelayMs(attempt, hinted), signal)
        attempt += 1
        continue
      }
      throw error
    }
  }

  private buildRequestInit(args: {
    operationId: string
    variables: Record<string, unknown> | undefined
    idempotencyKey: string | undefined
    signal: AbortSignal | undefined
  }): NonNullable<Parameters<typeof globalThis.fetch>[1]> {
    return {
      method: 'POST',
      headers: {
        authorization: `Bearer ${this.apiKey}`,
        'content-type': 'application/json',
        ...(args.idempotencyKey !== undefined ? { 'idempotency-key': args.idempotencyKey } : {}),
      },
      body: JSON.stringify({ operationId: args.operationId, variables: args.variables ?? {} }),
      signal: composeSignal(args.signal, this.timeoutMs),
    }
  }
}

function composeSignal(signal: AbortSignal | undefined, timeoutMs: number): AbortSignal {
  const timeout = AbortSignal.timeout(timeoutMs)
  return signal ? AbortSignal.any([signal, timeout]) : timeout
}

async function parseRejection(response: Response): Promise<{ code: string; message: string }> {
  const fallback = { code: 'internal_error', message: `HTTP ${response.status}` }
  try {
    const body = (await response.json()) as { errors?: WireError[] }
    const first = body.errors?.[0]
    if (!first) return fallback
    return {
      code: typeof first.extensions?.code === 'string' ? first.extensions.code : fallback.code,
      message: typeof first.message === 'string' ? first.message : fallback.message,
    }
  } catch {
    return fallback
  }
}

function parseRetryAfter(header: string | null): number | null {
  if (header === null) return null
  const seconds = Number(header)
  return Number.isFinite(seconds) && seconds >= 0 ? seconds : null
}

function wrapTransportError(operationId: string, err: unknown, timeoutMs: number): Error {
  const isTimeout = err instanceof Error && (err.name === 'TimeoutError' || err.name === 'AbortError')
  return isTimeout
    ? new GoliathTimeoutError(`Operation "${operationId}" timed out after ${timeoutMs}ms`)
    : new GoliathNetworkError(`Operation "${operationId}" failed to reach the API`, { cause: err })
}

async function readSuccessBody<TData>(
  operationId: string,
  response: Response,
  options: IdempotentRequestOptions | undefined,
  attempt: number
): Promise<TData> {
  let body: { data?: unknown; errors?: WireError[] }
  try {
    body = (await response.json()) as { data?: unknown; errors?: WireError[] }
  } catch (err) {
    throw new GoliathNetworkError(`Operation "${operationId}" returned a non-JSON response`, { cause: err })
  }
  // Surfaced for EVERY executed operation (any 200) — before the errors
  // check can throw. A replayed response whose STORED body carries errors
  // must still deliver replayed=true, or a caller retrying a timed-out
  // idempotent send can't tell the failure is the original attempt's
  // stored outcome rather than a fresh one.
  options?.onMeta?.({
    status: response.status,
    replayed: response.headers.get('idempotency-replayed') === 'true',
    retries: attempt,
  })
  if (body.errors !== undefined && body.errors.length > 0) {
    const entries = body.errors.map(e => ({
      message: typeof e.message === 'string' ? e.message : 'Unknown error',
      code: typeof e.extensions?.code === 'string' ? e.extensions.code : 'ERROR',
    }))
    throw new GoliathOperationError(operationId, entries, body.data ?? null)
  }
  return body.data as TData
}

function isRetryableRejection(
  status: number,
  ctx: { idempotencyKey: string | undefined; sideEffectRetrySafe: boolean }
): boolean {
  return (
    // Both 429s are pre-execution rejections — nothing ran, safe for any op.
    status === 429 ||
    // The original idempotent request is still in flight; the same key
    // replays its stored result once it completes.
    (status === 409 && ctx.idempotencyKey !== undefined) ||
    (status >= 500 && ctx.sideEffectRetrySafe)
  )
}
