export type GoliathClientOptions = {
  // A Goliath API key (`gsk_...`), created in the app under Settings → API keys.
  // Server-to-server only — never ship it in a browser or mobile app.
  apiKey: string
  // The API host — https://server.goliathdata.com for production.
  baseUrl: string
  // Injection seam for non-Node runtimes and tests. Defaults to globalThis.fetch.
  fetch?: typeof globalThis.fetch
  // Per-attempt timeout. Default 60s.
  timeoutMs?: number
  // Extra attempts after the first, for retryable failures only. Default 2.
  maxRetries?: number
}

export type ResponseMeta = {
  status: number
  // True when the gateway replayed a stored idempotent response
  // (`Idempotency-Replayed: true`) instead of re-running the send.
  replayed: boolean
  // How many retries this call consumed before succeeding.
  retries: number
}

export type RequestOptions = {
  signal?: AbortSignal
  // Called once per EXECUTED operation — any HTTP 200, including a replayed
  // idempotent response whose stored body carries errors (the call then throws
  // GoliathOperationError after onMeta fires, so the replay signal survives).
  // Gateway rejections and transport failures never reach onMeta; they carry
  // their metadata on the thrown error instead.
  onMeta?: (meta: ResponseMeta) => void
  // `never` (not merely absent) so an options VARIABLE typed as
  // IdempotentRequestOptions is also rejected on non-idempotent methods —
  // without it, structural assignability lets a key slip through anything
  // that isn't an inline object literal (excess-property checks only cover
  // literals) and the gateway 400s at runtime instead of the compiler here.
  idempotencyKey?: never
}

// Only operations flagged `idempotent` in the API catalog accept an
// Idempotency-Key — the gateway rejects the header on any other operation with
// 400. The generated client offers this type only on those methods, so sending
// a key elsewhere is a compile error rather than a runtime 400.
export type IdempotentRequestOptions = Omit<RequestOptions, 'idempotencyKey'> & {
  // 1-255 chars (e.g. a UUID). Makes retries of a send safe: a completed request
  // replays its stored response; an in-flight duplicate returns 409. Always send
  // one on send operations — a timed-out request retried without one can deliver
  // twice.
  idempotencyKey?: string
}
