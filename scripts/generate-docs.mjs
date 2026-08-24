// Generate the agent-readable docs tree — docs/ — from the manifest snapshot
// the server emits (src/generated/manifest.json). Ships in the published
// package (`files` in package.json) so any coding agent with the SDK in
// node_modules can find the right operation by reading files, no network or
// extra tooling required:
//
//   docs/README.md                       how to find and call an operation
//   docs/catalog.md                      one line per operation, grouped by domain
//   docs/operations/<domain>/<id>.md     variables, gateway notes, response shape
//
// The catalog is deliberately small (~one line per operation): an agent reads
// it whole, picks an operationId, then reads that one operation page. Field-
// level input/response shapes stay in the generated TypeScript declarations
// (dist/generated/operationTypes.d.ts) — the docs point at them instead of
// duplicating.
//
// Everything derives from the same manifest the gateway executes and the drift
// snapshot reviews, so the docs can never disagree with the client surface.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const sdkRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const MANIFEST_PATH = path.join(sdkRoot, 'src/generated/manifest.json')
const DOCS_DIR = path.join(sdkRoot, 'docs')

const GENERATED_NOTE =
  '<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->'

function pascal(id) {
  return id.charAt(0).toUpperCase() + id.slice(1)
}

function resultTypeName(op) {
  return `${pascal(op.operationId)}${op.operationType === 'mutation' ? 'Mutation' : 'Query'}`
}

// A pseudocode placeholder for one variable value: real literals for scalars,
// `<TypeName>` for enums/input objects (the operation page tells the reader the
// field-level shape lives in the TypeScript types).
function examplePlaceholder(type) {
  const nonNull = type.endsWith('!') ? type.slice(0, -1) : type
  if (nonNull.startsWith('[') && nonNull.endsWith(']')) return `[${examplePlaceholder(nonNull.slice(1, -1))}]`
  const scalar = { ID: "'<id>'", String: "'<text>'", Int: '0', Float: '0', Boolean: 'false' }[nonNull]
  return scalar ?? `<${nonNull}>`
}

// The call shape, mirroring the generated method signature rules in
// generate-client.mjs: required variables shown inline; a method whose
// variables are all optional is shown as a bare call (the variables table
// documents the filters); only idempotent operations take an options argument.
export function exampleCall(op) {
  const required = op.variables.filter(v => v.required)
  const args = []
  if (required.length > 0) {
    args.push(`{ ${required.map(v => `${v.name}: ${examplePlaceholder(v.type)}`).join(', ')} }`)
  }
  if (op.idempotent) {
    if (args.length === 0) args.push('undefined')
    args.push('{ idempotencyKey: crypto.randomUUID() }')
  }
  return `const result = await client.${op.domain}.${op.operationId}(${args.join(', ')})`
}

// The gateway-behavior notes shown on the operation page — same facts the
// generated JSDoc carries (jsdocFor in generate-client.mjs), phrased for a
// reader who has the page, not the type, in front of them.
function notesFor(op) {
  const notes = []
  if (op.resultCap !== null) notes.push(`The \`limit\` variable is clamped server-side to a maximum of ${op.resultCap}.`)
  if (op.orgIdVariable !== null) {
    notes.push(
      `The organization is derived from your API key — do not send an \`${op.orgIdVariable}\` variable (any value sent is ignored).`
    )
  }
  if (op.idempotent) {
    notes.push(
      'Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.'
    )
  }
  if (op.rateLimited) notes.push('Rate limited: shares the per-key analytics bucket; 429s carry a Retry-After header.')
  if (op.hasAuthorize) {
    notes.push(
      'Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).'
    )
  }
  return notes
}

export function renderOperationDoc(op) {
  const lines = [
    GENERATED_NOTE,
    '',
    `# ${op.operationId}`,
    '',
    `${op.operationType} · domain \`${op.domain}\` · requires the ${op.requiredScope} scope`,
    '',
    op.description,
    '',
    '## Call',
    '',
    '```ts',
    exampleCall(op),
    `// → Promise<${resultTypeName(op)}>`,
    '```',
    '',
    `\`<TypeName>\` placeholders are pseudocode — the field-level shape of every input and of \`${resultTypeName(op)}\` is TypeScript, in \`dist/generated/operationTypes.d.ts\`.`,
    '',
    '## Variables',
    '',
  ]
  if (op.variables.length === 0) {
    lines.push('None — call the method with no variables argument.', '')
  } else {
    lines.push('| Name | Type | Required | Default |', '|---|---|---|---|')
    for (const v of op.variables) {
      lines.push(`| \`${v.name}\` | \`${v.type}\` | ${v.required ? 'yes' : 'no'} | ${v.defaultValue ?? '—'} |`)
    }
    lines.push('')
  }
  const notes = notesFor(op)
  if (notes.length > 0) {
    lines.push('## Gateway notes', '', ...notes.map(n => `- ${n}`), '')
  }
  const responseJson = JSON.stringify(op.responseShape, null, 2)
  lines.push(
    '## Response shape',
    '',
    'The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.',
    ''
  )
  if (responseJson.includes('"... on ')) {
    lines.push(
      'Keys like `"... on TypeName"` are type-conditional: those fields are present only when the object resolves to that concrete type.',
      ''
    )
  }
  lines.push('```json', responseJson, '```', '')
  return lines.join('\n')
}

// One grep-friendly line per operation. Flags only for facts that change how
// you'd call it; the rest lives on the operation page.
function catalogLine(op) {
  const flags = []
  if (op.idempotent) flags.push('idempotent')
  if (op.resultCap !== null) flags.push(`max limit ${op.resultCap}`)
  if (op.rateLimited) flags.push('rate-limited')
  const flagText = flags.length > 0 ? ` [${flags.join('; ')}]` : ''
  return `- \`${op.operationId}\` (${op.operationType}, ${op.requiredScope})${flagText} — ${op.description}`
}

export function renderCatalog(manifest) {
  const byDomain = groupByDomain(manifest)
  const lines = [
    GENERATED_NOTE,
    '',
    '# Operation catalog — @goliathdata/sdk',
    '',
    `${manifest.operations.length} operations across ${byDomain.size} domains — small enough to read whole. One line each:`,
    '',
    '`operationId` (type, required scope) [flags] — what it does',
    '',
    'Full detail per operation (variables, call example, gateway notes, response shape): `operations/<domain>/<operationId>.md`.',
    '',
  ]
  for (const [domain, ops] of byDomain) {
    lines.push(`## ${domain}`, '', ...ops.map(catalogLine), '')
  }
  return lines.join('\n')
}

export function renderDocsReadme(manifest) {
  const byDomain = groupByDomain(manifest)
  const domainRows = [...byDomain.entries()].map(([domain, ops]) => `| \`${domain}\` | ${ops.length} |`)
  return [
    GENERATED_NOTE,
    '',
    '# Finding and calling operations — @goliathdata/sdk',
    '',
    'Docs for coding agents (and anyone who prefers files over websites), generated from the same operation manifest the API gateway executes — they cannot drift from what the client actually does.',
    '',
    '## Find the operation',
    '',
    '1. Read `catalog.md` — one line per operation, grouped by domain.',
    '2. Read `operations/<domain>/<operationId>.md` for the one you picked: variables, a call example, gateway notes, and the exact response shape.',
    '3. Field-level input and response types are TypeScript — grep the type name from the operation page in `dist/generated/operationTypes.d.ts`.',
    '',
    '## Call it',
    '',
    '```ts',
    "import { GoliathClient } from '@goliath-data/sdk'",
    '',
    'const apiKey = process.env.GOLIATH_API_KEY',
    "if (!apiKey) throw new Error('GOLIATH_API_KEY is not set')",
    '// baseUrl: the API host — https://server.goliathdata.com for production.',
    'const baseUrl = process.env.GOLIATH_BASE_URL',
    "if (!baseUrl) throw new Error('GOLIATH_BASE_URL is not set')",
    'const client = new GoliathClient({ apiKey, baseUrl })',
    '```',
    '',
    'Transport, retries, typed errors, and idempotency semantics are documented in the package README.',
    '',
    '## Domains',
    '',
    '| Domain | Operations |',
    '|---|---|',
    ...domainRows,
    '',
    '## Live catalog (needs an API key)',
    '',
    'The API also documents itself at runtime, which covers the two things static docs cannot:',
    '',
    '- `GET /api/v1/operations` — this catalog as JSON, with a per-key `authorized` flag for every operation.',
    '- `GET /api/v1/operations/:operationId` — full detail, including operations newer than this installed SDK release; call those via the untyped `client.execute(operationId, variables)` escape hatch.',
    '- `GET /api/v1/help` — the whole API as one markdown document (no key required).',
    '',
  ].join('\n')
}

// Manifest identifiers become filesystem paths under docs/. They are
// first-party build output (GraphQL operation names + our domain keys), so
// anything outside the GraphQL-name grammar is a generator bug upstream —
// refuse loudly rather than let `path.join` write outside the docs tree.
const SAFE_IDENTIFIER = /^[_A-Za-z][_A-Za-z0-9]*$/

export function assertSafeIdentifiers(manifest) {
  const bad = manifest.operations.filter(
    op => !SAFE_IDENTIFIER.test(op.domain) || !SAFE_IDENTIFIER.test(op.operationId)
  )
  if (bad.length > 0) {
    throw new Error(
      `generate-docs: ${bad.length} operation(s) have a domain/operationId that is not a plain identifier — ` +
        `refusing to use them as file paths:\n  ${bad.map(op => `${op.domain}/${op.operationId}`).join('\n  ')}`
    )
  }
}

function groupByDomain(manifest) {
  const byDomain = new Map()
  const sorted = [...manifest.operations].sort(
    (a, b) => a.domain.localeCompare(b.domain) || a.operationId.localeCompare(b.operationId)
  )
  for (const op of sorted) {
    if (!byDomain.has(op.domain)) byDomain.set(op.domain, [])
    byDomain.get(op.domain).push(op)
  }
  return byDomain
}

function main() {
  if (!fs.existsSync(MANIFEST_PATH)) {
    throw new Error(
      `generate-docs: manifest snapshot is missing (${path.relative(sdkRoot, MANIFEST_PATH)}). ` +
        'Run the earlier generate steps first — `yarn generate` runs the full chain.'
    )
  }
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'))
  assertSafeIdentifiers(manifest)

  // Rebuild the tree wholesale so removed operations cannot leave stale pages.
  fs.rmSync(DOCS_DIR, { recursive: true, force: true })
  fs.mkdirSync(DOCS_DIR, { recursive: true })
  fs.writeFileSync(path.join(DOCS_DIR, 'README.md'), renderDocsReadme(manifest))
  fs.writeFileSync(path.join(DOCS_DIR, 'catalog.md'), renderCatalog(manifest))
  for (const op of manifest.operations) {
    const domainDir = path.join(DOCS_DIR, 'operations', op.domain)
    fs.mkdirSync(domainDir, { recursive: true })
    fs.writeFileSync(path.join(domainDir, `${op.operationId}.md`), renderOperationDoc(op))
  }
  console.log(
    `Wrote docs for ${manifest.operations.length} operations across ${new Set(manifest.operations.map(o => o.domain)).size} domains to ${path.relative(sdkRoot, DOCS_DIR)}/`
  )
}

// Import-safe: docs.test.ts imports the render functions from this module; only
// a direct `node scripts/generate-docs.mjs` run executes main().
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main()
}
