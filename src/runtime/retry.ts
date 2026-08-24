export const DEFAULT_MAX_RETRIES = 2

const BASE_DELAY_MS = 500
const MAX_DELAY_MS = 8_000

// Exponential backoff with full jitter (delay drawn uniformly from [0, cap]),
// except when the gateway told us exactly when to come back (Retry-After on
// rate_limited) — then we honor it precisely instead of guessing.
export function backoffDelayMs(
  attempt: number,
  retryAfterSeconds: number | null,
  random: () => number = Math.random
): number {
  if (retryAfterSeconds !== null) return retryAfterSeconds * 1000
  const cap = Math.min(MAX_DELAY_MS, BASE_DELAY_MS * 2 ** attempt)
  return Math.floor(cap * random())
}

export function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(abortReason(signal))
      return
    }
    const onAbort = (): void => {
      clearTimeout(timer)
      reject(abortReason(signal))
    }
    const timer = setTimeout(() => {
      signal?.removeEventListener('abort', onAbort)
      resolve()
    }, ms)
    signal?.addEventListener('abort', onAbort, { once: true })
  })
}

function abortReason(signal: AbortSignal | undefined): unknown {
  return signal?.reason ?? new Error('The operation was aborted')
}
