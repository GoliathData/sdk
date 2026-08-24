// @goliath-data/sdk — official TypeScript client for the Goliath developer API.
//
// GoliathClient carries one typed method per persisted operation, namespaced by
// domain (client.deals.findDeals(...)), generated from the server's operation
// manifest. The untyped escape hatch client.execute(operationId, variables)
// covers operations added to the API before this SDK release.

export { GoliathClient } from './generated/domains'
export { GOLIATH_API_PATH, GoliathClientCore } from './runtime/client'
export {
  GATEWAY_ERROR_CODES,
  GoliathApiError,
  GoliathAuthenticationError,
  GoliathBadRequestError,
  GoliathConcurrencyLimitError,
  GoliathError,
  GoliathIdempotencyConflictError,
  GoliathNetworkError,
  GoliathOperationError,
  type GoliathOperationErrorEntry,
  GoliathPermissionError,
  GoliathRateLimitError,
  GoliathServerError,
  GoliathTimeoutError,
  OPERATION_ERROR_CODES,
} from './runtime/errors'
export type { GoliathClientOptions, IdempotentRequestOptions, RequestOptions, ResponseMeta } from './runtime/types'
