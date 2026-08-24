import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
// The generator exports its pure render functions so these tests and the emit
// path can never disagree about what the docs contain (same pattern as
// snapshot.test.ts ↔ generate-client.mjs).
import {
  assertSafeIdentifiers,
  exampleCall,
  renderCatalog,
  renderDocsReadme,
  renderOperationDoc,
} from '../../scripts/generate-docs.mjs'

const sdkRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const MANIFEST_PATH = path.join(sdkRoot, 'src/generated/manifest.json')

type ManifestOperation = {
  operationId: string
  domain: string
  operationType: 'query' | 'mutation'
  requiredScope: string
  description: string
  resultCap: number | null
  rateLimited: boolean
  idempotent: boolean
  orgIdVariable: string | null
  hasAuthorize: boolean
  variables: { name: string; type: string; required: boolean; defaultValue: string | null }[]
  responseShape: Record<string, unknown>
}

const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8')) as { operations: ManifestOperation[] }

describe('generate-docs renderers', () => {
  it('catalog has exactly one line per operation and one section per domain', () => {
    const catalog = renderCatalog(manifest)
    const bulletCount = catalog.split('\n').filter(l => l.startsWith('- `')).length
    expect(bulletCount).toBe(manifest.operations.length)
    for (const domain of new Set(manifest.operations.map(o => o.domain))) {
      expect(catalog).toContain(`## ${domain}`)
    }
    // Every operationId appears verbatim — the catalog is the grep surface.
    for (const op of manifest.operations) {
      expect(catalog).toContain(`- \`${op.operationId}\` (${op.operationType}, ${op.requiredScope})`)
    }
  })

  it('operation pages carry the call, variables, and the exact response shape', () => {
    for (const op of manifest.operations) {
      const doc = renderOperationDoc(op)
      expect(doc).toContain(`# ${op.operationId}`)
      expect(doc).toContain(`client.${op.domain}.${op.operationId}(`)
      for (const v of op.variables) expect(doc).toContain(`| \`${v.name}\` | \`${v.type}\` |`)
      // The JSON block round-trips to the manifest's responseShape.
      const json = /```json\n([\s\S]*?)\n```/.exec(doc)
      expect(json, `${op.operationId} page has no response-shape block`).not.toBeNull()
      expect(JSON.parse((json as RegExpExecArray)[1])).toEqual(op.responseShape)
    }
  })

  it('gateway notes appear exactly when the manifest flags them', () => {
    // Match the full note bullets, not bare phrases — operation descriptions
    // legitimately contain words like "clamped server-side" on their own.
    for (const op of manifest.operations) {
      const doc = renderOperationDoc(op)
      expect(doc.includes('- Idempotent: pass `options.idempotencyKey`')).toBe(op.idempotent)
      expect(doc.includes('- The `limit` variable is clamped server-side')).toBe(op.resultCap !== null)
      expect(doc.includes('- The organization is derived from your API key')).toBe(op.orgIdVariable !== null)
      expect(doc.includes('- Rate limited: shares the per-key analytics bucket')).toBe(op.rateLimited)
      expect(doc.includes('- Org-guarded:')).toBe(op.hasAuthorize)
    }
  })

  it('example calls mirror the generated method signatures', () => {
    const noVars = manifest.operations.find(op => op.variables.length === 0 && !op.idempotent)
    expect(noVars).toBeDefined()
    const op = noVars as ManifestOperation
    expect(exampleCall(op)).toBe(`const result = await client.${op.domain}.${op.operationId}()`)

    const required = manifest.operations.find(op => op.variables.some(v => v.required))
    expect(required).toBeDefined()
    const reqOp = required as ManifestOperation
    const firstRequired = reqOp.variables.filter(v => v.required)[0]
    expect(exampleCall(reqOp)).toContain(`${firstRequired.name}:`)

    const idempotent = manifest.operations.find(op => op.idempotent)
    expect(idempotent).toBeDefined()
    expect(exampleCall(idempotent as ManifestOperation)).toContain('idempotencyKey: crypto.randomUUID()')
  })

  it('rejects manifest identifiers that could escape the docs tree as paths', () => {
    expect(() => assertSafeIdentifiers(manifest)).not.toThrow()
    const evil = (domain: string, operationId: string) =>
      ({ operations: [{ ...manifest.operations[0], domain, operationId }] }) as typeof manifest
    expect(() => assertSafeIdentifiers(evil('../evil', 'getMyProfile'))).toThrow(/not a plain identifier/)
    expect(() => assertSafeIdentifiers(evil('account', 'a/b'))).toThrow(/not a plain identifier/)
    expect(() => assertSafeIdentifiers(evil('account', '..'))).toThrow(/not a plain identifier/)
  })

  it('docs README lists every domain with its operation count', () => {
    const readme = renderDocsReadme(manifest)
    const counts = new Map<string, number>()
    for (const op of manifest.operations) counts.set(op.domain, (counts.get(op.domain) ?? 0) + 1)
    for (const [domain, count] of counts) {
      expect(readme).toContain(`| \`${domain}\` | ${count} |`)
    }
  })
})
