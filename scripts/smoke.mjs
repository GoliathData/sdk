// End-to-end smoke of the BUILT package against the staging developer API —
// the dogfood run: imports from dist/ (run `yarn build` first), authenticates
// with a real key, and exercises typed reads + the discovery endpoint. Ports
// the read slice of scripts/dev/developer-api-matrix.sh onto the SDK.
//
//   GOLIATH_SDK_STAGING_KEY=gsk_... GOLIATH_SDK_STAGING_URL=https://<api-host> yarn --cwd sdk smoke:staging
//
// READ-scope operations only — never mutates staging data. Exits non-zero on
// the first failure.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const sdkRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

// dist/ is imported dynamically AFTER this check — a static import would crash
// with a bare ERR_MODULE_NOT_FOUND on an unbuilt checkout instead of saying
// what to do.
if (!fs.existsSync(path.join(sdkRoot, 'dist/index.js'))) {
  console.error(
    'sdk dist/ is missing — this smoke runs the BUILT package. Run `yarn --cwd sdk build` (after `yarn --cwd sdk generate`) and retry.'
  )
  process.exit(1)
}
const key = process.env.GOLIATH_SDK_STAGING_KEY
if (!key) {
  console.error('GOLIATH_SDK_STAGING_KEY is required (a staging gsk_... key).')
  process.exit(1)
}

const { GoliathClient } = await import('../dist/index.js')
const baseUrl = process.env.GOLIATH_SDK_STAGING_URL
if (!baseUrl) {
  console.error('GOLIATH_SDK_STAGING_URL is required (the staging API host).')
  process.exit(1)
}
const client = new GoliathClient({ apiKey: key, baseUrl })
let failures = 0

async function check(name, fn) {
  try {
    const detail = await fn()
    console.log(`  ✓ ${name}${detail ? ` — ${detail}` : ''}`)
  } catch (err) {
    failures += 1
    console.error(`  ✗ ${name}: ${err instanceof Error ? err.message : err}`)
  }
}

console.log(`SDK smoke against ${baseUrl}`)

await check('account.getMyProfile', async () => {
  const data = await client.account.getMyProfile()
  return data.currentUser?.email ?? 'no email in response'
})

await check('communications.listCommunicationChannels', async () => {
  const data = await client.communications.listCommunicationChannels()
  const lines = data.currentUser?.organization?.twilioPhoneNumbers ?? []
  return `${lines.length} phone line(s)`
})

await check('deals.findDeals({ limit: 3 })', async () => {
  const data = await client.deals.findDeals({ limit: 3 })
  return `${data.dealQuery?.findDeals?.deals?.length ?? 0} deal(s)`
})

await check('discovery parity: GET /api/v1/operations matches operations.snapshot.json', async () => {
  const res = await fetch(`${baseUrl}/api/v1/operations`, { headers: { authorization: `Bearer ${key}` } })
  if (!res.ok) throw new Error(`discovery returned HTTP ${res.status}`)
  const body = await res.json()
  const live = new Set((body.operations ?? []).map(op => op.operationId))
  const snapshot = JSON.parse(fs.readFileSync(path.join(sdkRoot, 'operations.snapshot.json'), 'utf8'))
  const missing = snapshot.filter(op => !live.has(op.operationId)).map(op => op.operationId)
  const extra = [...live].filter(id => !snapshot.some(op => op.operationId === id))
  if (missing.length || extra.length) {
    throw new Error(
      `surface drift vs staging — missing from staging: [${missing.join(', ')}], not in SDK: [${extra.join(', ')}] ` +
        '(expected when staging and this checkout are on different commits; regenerate + snapshot:update if this checkout is behind)'
    )
  }
  return `${live.size} operations in lockstep`
})

console.log(failures === 0 ? 'PASS' : `FAIL (${failures})`)
process.exit(failures === 0 ? 0 : 1)
