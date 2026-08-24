import { describe, expect, it } from 'vitest'
import { backoffDelayMs } from '../runtime/retry'

describe('backoffDelayMs', () => {
  it('honors Retry-After exactly, ignoring the exponential schedule', () => {
    expect(backoffDelayMs(0, 3, () => 0.1)).toBe(3000)
    expect(backoffDelayMs(5, 42, () => 0.9)).toBe(42_000)
  })

  it('draws full jitter from [0, cap] with cap doubling per attempt', () => {
    expect(backoffDelayMs(0, null, () => 1)).toBe(500)
    expect(backoffDelayMs(1, null, () => 1)).toBe(1000)
    expect(backoffDelayMs(2, null, () => 1)).toBe(2000)
    expect(backoffDelayMs(0, null, () => 0)).toBe(0)
    expect(backoffDelayMs(1, null, () => 0.5)).toBe(500)
  })

  it('caps the exponential schedule at 8s', () => {
    expect(backoffDelayMs(10, null, () => 1)).toBe(8000)
  })
})
