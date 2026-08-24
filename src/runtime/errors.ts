// Error hierarchy mirroring the gateway's two failure surfaces:
//
//   1. Gateway rejections (HTTP status ≠ 200) — auth, validation, limits. Mapped
//      to a GoliathApiError subclass by status + code.
//   2. Executed-operation errors (HTTP 200 with an `errors` array) — the
//      operation ran and some resolver failed. Thrown as GoliathOperationError,
//      carrying every shaped error plus any partial `data`.
//
// Plus transport failures that never produced a response: GoliathNetworkError /
// GoliathTimeoutError.

// Stable gateway rejection codes (`errors[0].extensions.code` on non-200 responses).
export const GATEWAY_ERROR_CODES = {
  UNAUTHORIZED: 'unauthorized',
  RAW_QUERY_FORBIDDEN: 'raw_query_forbidden',
  BAD_REQUEST: 'bad_request',
  UNKNOWN_OPERATION: 'unknown_operation',
  INSUFFICIENT_SCOPE: 'insufficient_scope',
  FORBIDDEN: 'forbidden',
  IDEMPOTENCY_CONFLICT: 'idempotency_conflict',
  RATE_LIMITED: 'rate_limited',
  CONCURRENCY_LIMIT: 'concurrency_limit',
  INTERNAL_ERROR: 'internal_error',
} as const

// Codes an executed operation's errors carry (`extensions.code` inside a 200 body).
export const OPERATION_ERROR_CODES = {
  UNAUTHENTICATED: 'UNAUTHENTICATED',
  UNAUTHORIZED: 'UNAUTHORIZED',
  BAD_USER_INPUT: 'BAD_USER_INPUT',
  FORBIDDEN: 'FORBIDDEN',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
} as const

export class GoliathError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options)
    this.name = new.target.name
  }
}

// An HTTP-level gateway rejection (status ≠ 200): the operation never executed.
export class GoliathApiError extends GoliathError {
  readonly status: number
  readonly code: string

  constructor(message: string, status: number, code: string) {
    super(message)
    this.status = status
    this.code = code
  }
}

export class GoliathAuthenticationError extends GoliathApiError {}

export class GoliathPermissionError extends GoliathApiError {}

export class GoliathBadRequestError extends GoliathApiError {}

export class GoliathIdempotencyConflictError extends GoliathApiError {}

export class GoliathRateLimitError extends GoliathApiError {
  // From the Retry-After response header, when the gateway sent one.
  readonly retryAfterSeconds: number | null

  constructor(message: string, status: number, code: string, retryAfterSeconds: number | null) {
    super(message, status, code)
    this.retryAfterSeconds = retryAfterSeconds
  }
}

export class GoliathConcurrencyLimitError extends GoliathApiError {}

export class GoliathServerError extends GoliathApiError {}

export type GoliathOperationErrorEntry = { message: string; code: string }

// The operation executed and returned HTTP 200 with an `errors` array. `data`
// may hold partial results alongside the errors.
export class GoliathOperationError extends GoliathError {
  readonly operationId: string
  readonly errors: readonly GoliathOperationErrorEntry[]
  readonly data: unknown

  constructor(operationId: string, errors: readonly GoliathOperationErrorEntry[], data: unknown) {
    super(`Operation "${operationId}" failed: ${errors.map(e => e.message).join('; ')}`)
    this.operationId = operationId
    this.errors = errors
    this.data = data
  }
}

// The request never produced an HTTP response (DNS, connection reset, malformed body).
export class GoliathNetworkError extends GoliathError {}

// The per-attempt timeout (GoliathClientOptions.timeoutMs) elapsed.
export class GoliathTimeoutError extends GoliathError {}

// Map a gateway rejection to its error class. Status decides the family; the
// code splits the two 429s (rate_limited carries Retry-After, concurrency_limit
// does not — both are pre-execution rejections and safe to retry).
export function apiErrorFrom(
  status: number,
  code: string,
  message: string,
  retryAfterSeconds: number | null
): GoliathApiError {
  if (status === 401) return new GoliathAuthenticationError(message, status, code)
  if (status === 403) return new GoliathPermissionError(message, status, code)
  if (status === 409) return new GoliathIdempotencyConflictError(message, status, code)
  if (status === 429) {
    if (code === GATEWAY_ERROR_CODES.CONCURRENCY_LIMIT) return new GoliathConcurrencyLimitError(message, status, code)
    return new GoliathRateLimitError(message, status, code, retryAfterSeconds)
  }
  if (status === 400) return new GoliathBadRequestError(message, status, code)
  if (status >= 500) return new GoliathServerError(message, status, code)
  return new GoliathApiError(message, status, code)
}
