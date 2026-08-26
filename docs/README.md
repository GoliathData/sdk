<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# Finding and calling operations — @goliathdata/sdk

Docs for coding agents (and anyone who prefers files over websites), generated from the same operation manifest the API gateway executes — they cannot drift from what the client actually does.

## Find the operation

1. Read `catalog.md` — one line per operation, grouped by domain.
2. Read `operations/<domain>/<operationId>.md` for the one you picked: variables, a call example, gateway notes, and the exact response shape.
3. Field-level input and response types are TypeScript — grep the type name from the operation page in `dist/generated/operationTypes.d.ts`.

## Call it

```ts
import { GoliathClient } from '@goliath-data/sdk'

const apiKey = process.env.GOLIATH_API_KEY
if (!apiKey) throw new Error('GOLIATH_API_KEY is not set')
// baseUrl: the API host — https://server.goliathdata.com for production.
const baseUrl = process.env.GOLIATH_BASE_URL
if (!baseUrl) throw new Error('GOLIATH_BASE_URL is not set')
const client = new GoliathClient({ apiKey, baseUrl })
```

Transport, retries, typed errors, and idempotency semantics are documented in the package README.

## Domains

| Domain | Operations |
|---|---|
| `account` | 4 |
| `appointments` | 7 |
| `billing` | 6 |
| `bulkTasks` | 1 |
| `communications` | 4 |
| `contacts` | 36 |
| `conversations` | 5 |
| `deals` | 26 |
| `forms` | 13 |
| `notifications` | 4 |
| `properties` | 23 |
| `tasks` | 8 |
| `team` | 7 |
| `workflows` | 44 |

## Live catalog (needs an API key)

The API also documents itself at runtime, which covers the two things static docs cannot:

- `GET /api/v1/operations` — this catalog as JSON, with a per-key `authorized` flag for every operation.
- `GET /api/v1/operations/:operationId` — full detail, including operations newer than this installed SDK release; call those via the untyped `client.execute(operationId, variables)` escape hatch.
- `GET /api/v1/help` — the whole API as one markdown document (no key required).
