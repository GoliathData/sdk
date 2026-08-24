import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { GoliathClient } from '../index'

const sdkRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')

type SnapshotEntry = { operationId: string; domain: string }
const snapshot = JSON.parse(fs.readFileSync(path.join(sdkRoot, 'operations.snapshot.json'), 'utf8')) as SnapshotEntry[]

const client = new GoliathClient({ apiKey: 'gsk_test', baseUrl: 'https://api.example.com' })

describe('generated client surface', () => {
  it('exposes every snapshot operation as client.<domain>.<operationId>', () => {
    const missing = snapshot.filter(({ domain, operationId }) => {
      const namespace = (client as unknown as Record<string, Record<string, unknown>>)[domain]
      return typeof namespace?.[operationId] !== 'function'
    })
    expect(missing).toEqual([])
  })

  it('exposes no methods beyond the snapshot (a stale domains.ts would ship removed operations)', () => {
    const expected = new Map<string, Set<string>>()
    for (const { domain, operationId } of snapshot) {
      if (!expected.has(domain)) expected.set(domain, new Set())
      expected.get(domain)?.add(operationId)
    }
    // Enumerate the CLIENT's namespaces (own object-valued properties — the
    // runtime core's private fields are primitives/functions), not the
    // snapshot's domains: iterating snapshot domains would never visit a
    // namespace whose whole domain was removed from the manifest.
    const extras: string[] = []
    for (const [key, value] of Object.entries(client)) {
      if (value === null || typeof value !== 'object') continue
      const ops = expected.get(key)
      if (!ops) {
        extras.push(`${key}.* (entire domain not in snapshot)`)
        continue
      }
      for (const method of Object.keys(value)) {
        if (!ops.has(method)) extras.push(`${key}.${method}`)
      }
    }
    expect(extras).toEqual([])
  })
})
