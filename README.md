# @goliath-data/sdk

> **This repository is a read-only mirror.** The source of truth is the `sdk/`
> workspace of [GoliathData/sourcing](https://github.com/GoliathData/sourcing), where
> the typed surface is generated from the developer API's schema. Every merge there
> that touches the SDK is synced here as one commit; the npm package is published from
> there too. Open issues here; send code changes to `sourcing`.

Official TypeScript SDK for the [Goliath](https://goliathdata.com) developer API.

The developer API is a persisted-operation gateway: one HTTP endpoint (`POST /api/v1/graphql`), a fixed catalog of named operations, `Authorization: Bearer gsk_...` keys created in the app under **Settings → API keys**. This SDK wraps it with one typed method per operation, namespaced by domain, plus transport, retries, typed errors, and idempotency handled for you.

> **Status:** the developer API is **live in production** at `https://server.goliathdata.com` — keys are self-serve in the app under **Settings → API keys**.

## Quickstart

```ts
import { GoliathClient } from '@goliath-data/sdk'

// gsk_... from Settings → API keys. Server-side only, never in a browser.
// Narrowed to `string` first: apiKey is required, and process.env values
// are `string | undefined` under strict TypeScript.
const apiKey = process.env.GOLIATH_API_KEY
if (!apiKey) throw new Error('GOLIATH_API_KEY is not set')

// baseUrl: the API host — https://server.goliathdata.com for production.
const baseUrl = process.env.GOLIATH_BASE_URL
if (!baseUrl) throw new Error('GOLIATH_BASE_URL is not set')

const goliath = new GoliathClient({ apiKey, baseUrl })

// Typed queries — one method per operation, namespaced by domain.
const { dealQuery } = await goliath.deals.findDeals({ limit: 25 })

// Idempotent writes — pass an Idempotency-Key so retries can never double-fire.
await goliath.contacts.createContact(
  { input: { firstName: 'Jane', lastName: 'Doe', phoneNumbers: ['+13235550100'] } },
  { idempotencyKey: crypto.randomUUID() }
)

// Untyped escape hatch for operations newer than this SDK release.
await goliath.execute('someBrandNewOperation', { id: '...' })
```

Constructor options: `apiKey` (required), `baseUrl` (required — `https://server.goliathdata.com` for production), `fetch` (injection for non-Node runtimes/tests), `timeoutMs` (default 60s per attempt), `maxRetries` (default 2).

## Errors

Everything throws — no error-shaped return values:

| Class | When |
|---|---|
| `GoliathAuthenticationError` (401) | Missing/invalid/revoked key |
| `GoliathPermissionError` (403) | Missing scope, or a resource outside your organization |
| `GoliathBadRequestError` (400) | Bad body, unknown operation, raw GraphQL, Idempotency-Key on a read |
| `GoliathIdempotencyConflictError` (409) | Same Idempotency-Key still in flight — retry with the same key |
| `GoliathRateLimitError` (429) | Analytics bucket exhausted; carries `retryAfterSeconds` |
| `GoliathConcurrencyLimitError` (429) | Too many in-flight requests on this key |
| `GoliathServerError` (5xx) | Gateway-side failure |
| `GoliathOperationError` | The operation executed and returned `errors` (HTTP 200); carries every shaped error + partial `data` |
| `GoliathNetworkError` / `GoliathTimeoutError` | No HTTP response at all |

## Retries (built in)

- Both 429s are pre-execution rejections — retried for any operation, honoring `Retry-After` exactly.
- Network errors, timeouts, and 5xx retry only when a re-send cannot double-fire a side effect: queries, or mutations sent with an `idempotencyKey`.
- A mutation without an idempotency key is **never** re-sent.
- Exponential backoff with full jitter (500ms base, 8s cap).

## Idempotency

Every mutation accepts `options.idempotencyKey` — always pass one on writes, since the client never re-sends an unkeyed mutation. Passing it on a read is a **compile error**, matching the gateway's 400. Replays surface via the `onMeta` callback (`meta.replayed === true`), including replays whose stored body carries errors.

## Releasing

Versioning is snapshot-derived semver, publishing is gated until the developer
API reaches GA, and releases are manual — the full policy, bump table, and GA
flip checklist live in [RELEASING.md](./RELEASING.md).

## Public mirror

The source lives here, in the `sdk/` workspace of the monorepo, because the typed surface is generated from the server's schema. A read-only copy is published to [GoliathData/sdk](https://github.com/GoliathData/sdk): every merge to `main` that touches the SDK surface runs `.github/workflows/sync-sdk-mirror.yml`, which regenerates, exports a standalone tree with `scripts/export-standalone.mjs` (generated files committed, plain `tsdown` + `tsc` + `vitest` in place of the monorepo tooling), proves that tree installs, builds and tests on its own, and pushes it as one commit named after the source SHA. Code changes go here, never to the mirror; npm publishing stays here too.

## Agent-readable docs (`docs/`)

The package ships a generated markdown docs tree so a coding agent with the SDK in `node_modules` can find the right operation by reading files — no network, no extra tooling:

- `docs/catalog.md` — one grep-friendly line per operation, grouped by domain
- `docs/operations/<domain>/<operationId>.md` — variables, a call example, gateway notes (idempotency, result caps, org guards), and the exact response shape
- `docs/README.md` — how to find and call an operation, plus the live discovery endpoints (`GET /api/v1/operations`) for per-key authorization and operations newer than the installed release

Like the client surface, the tree is generated from the operation manifest (`yarn generate` → `scripts/generate-docs.mjs`) and can never drift from what the gateway executes.

## Regenerating the surface

The typed surface is generated from the server's operation manifest — never hand-edited:

```bash
yarn generate                # manifest snapshot → operation types → domains.ts → docs/
yarn snapshot:update         # refresh operations.snapshot.json after a deliberate surface change
```

`operations.snapshot.json` is the committed, reviewed record of the SDK surface. CI fails when the server's manifest drifts from it, so every surface change is an explicit diff in a PR.

## Testing against staging

```bash
# Both also need the staging API host in GOLIATH_SDK_STAGING_URL (provided by the Goliath team).
GOLIATH_SDK_STAGING_KEY=gsk_... GOLIATH_SDK_STAGING_URL=https://<api-host> yarn test           # staging integration suite
GOLIATH_SDK_STAGING_KEY=gsk_... GOLIATH_SDK_STAGING_URL=https://<api-host> yarn smoke:staging   # end-to-end smoke against the BUILT package (run `yarn build` first)
```

Both are opt-in and read-only (READ-scope operations): each needs `GOLIATH_SDK_STAGING_KEY` **and** `GOLIATH_SDK_STAGING_URL`, and skips/exits if either is unset.
