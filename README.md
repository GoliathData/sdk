# @goliath-data/sdk

> **This repository is a read-only mirror.** It is generated and published
> automatically from Goliath's source tree, so pull requests cannot be accepted
> here — but issues are welcome. This is the same source the npm package is
> built from; releases themselves are published from Goliath's own pipeline.

Official TypeScript SDK for the [Goliath](https://goliathdata.com) developer API.

The developer API is a persisted-operation gateway: one HTTP endpoint (`POST /api/v1/call`), a fixed catalog of named operations, and `Authorization: Bearer gsk_...` keys you create in the app under **Settings → API keys**. This SDK wraps it with one typed method per operation, namespaced by domain, plus transport, retries, typed errors, and idempotency handled for you.

`/api/v1/call` is the path every doc leads with. The original `/api/v1/graphql` is the same handler under an older name and stays mounted forever for existing integrations — including this SDK's own transport, which still posts there. Prefer `/api/v1/call` when you call the gateway directly: the `graphql` in the old name misleads callers, LLM agents especially, into sending raw GraphQL, which the gateway always refuses (`raw_query_forbidden`). It only ever accepts `{ operationId, variables }`.

Full API documentation lives at [goliathdata.com/developers](https://goliathdata.com/developers/): a quickstart, guides, and a reference page for every operation.

## Install

```bash
npm install @goliath-data/sdk
```

The package is in public beta (`0.1.0-beta.x`); the typed surface follows semver from here, so pin a version if you need stability across upgrades. Requires Node 20.3 or later (the client relies on `AbortSignal.any`, added in 20.3, as well as WHATWG `fetch`). Server-side only: your API key must never ship in a browser or mobile app.

## Quickstart

```ts
import { GoliathClient } from '@goliath-data/sdk'

// gsk_... from Settings → API keys. Server-side only, never in a browser.
// Narrowed to `string` first: apiKey is required, and process.env values
// are `string | undefined` under strict TypeScript.
const apiKey = process.env.GOLIATH_API_KEY
if (!apiKey) throw new Error('GOLIATH_API_KEY is not set')

const goliath = new GoliathClient({ apiKey, baseUrl: 'https://server.goliathdata.com' })

// Typed queries — one method per operation, namespaced by domain.
const { dealQuery } = await goliath.deals.findDeals({ limit: 25 })

// Idempotent writes — pass an Idempotency-Key so retries can never double-fire.
await goliath.contacts.createContact(
  { input: { sellerFirstName: 'Jane', sellerLastName: 'Doe' } },
  { idempotencyKey: crypto.randomUUID() }
)

// Untyped escape hatch for operations newer than this SDK release.
await goliath.execute('someBrandNewOperation', { id: '...' })
```

Every call runs as the key's owning user, so your real organization permissions apply.

## Configuration

| Option | Required | Default | Notes |
|---|---|---|---|
| `apiKey` | yes | — | A `gsk_...` key from **Settings → API keys**. |
| `baseUrl` | yes | — | The API host: `https://server.goliathdata.com`. |
| `timeoutMs` | no | `60000` | Per attempt, not per call — a retried call can take longer overall. |
| `maxRetries` | no | `2` | Retry budget for the policy described below. |
| `fetch` | no | global `fetch` | Inject a WHATWG-compatible implementation — for edge runtimes, or to capture requests in tests. The runtime still needs `AbortSignal.any`. |

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

Branch on a code without string literals: `GATEWAY_ERROR_CODES` holds the gateway's own codes (`unauthorized`, `raw_query_forbidden`, `rate_limited`, …) and `OPERATION_ERROR_CODES` the codes an operation's `errors` carry (`UNAUTHENTICATED`, `BAD_USER_INPUT`, …).

## Retries (built in)

- Both 429s are pre-execution rejections — retried for any operation, honoring `Retry-After` exactly.
- Network errors, timeouts, and 5xx retry only when a re-send cannot double-fire a side effect: queries, or mutations sent with an `idempotencyKey`.
- A mutation without an idempotency key is **never** re-sent.
- Exponential backoff with full jitter (500ms base, 8s cap).

## Idempotency

Every mutation accepts `options.idempotencyKey` — always pass one on writes, since the client never re-sends an unkeyed mutation. Passing it on a read is a **compile error**, matching the gateway's 400. Replays surface via the `onMeta` callback, which receives a `ResponseMeta` (`{ status, replayed, retries }`; `meta.replayed === true` on a replay), including replays whose stored body carries errors.

## Ask Goliath

Any `WRITE` key can talk to its owner's Ask Goliath, the agent inside the app, through `goliath.askGoliath.*` (start, send, answer its questions, read or cancel a turn, list chats). Each call holds at most 25 seconds; `askGoliath()` sends a message and polls until the reply is done:

```ts
import { askGoliath } from '@goliath-data/sdk'

const turn = await askGoliath(goliath, { message: 'Which deals stalled this week?' })
// turn.status: COMPLETED, WAITING_FOR_CALLER (answer turn.questions with answerAgentQuestions), FAILED or CANCELLED
console.log(turn.reply)
await askGoliath(goliath, { conversationId: turn.conversationId, message: 'Draft a follow-up for the first one.' })
```

It acts as the key's owner, under that person's trust settings, and the chat shows in their chat list labelled with the key's name. `goliath.askGoliath.submitFeedback({ kind: 'FEATURE_REQUEST', title, message })` sends a bug report, feature request or question to our team.

## Discovering operations

- `docs/catalog.md` in this package — one line per operation, grouped by domain.
- `docs/operations/<domain>/<operationId>.md` — variables, a call example, gateway notes (idempotency, result caps, org guards), and the exact response shape.
- `docs/README.md` — how to find and call an operation.
- Live: `GET /api/v1/operations` lists the catalog with per-key authorization (including operations added after this release), and `GET /api/v1/help` is the whole API as one markdown document.

The docs tree ships in the package so a coding agent with the SDK in `node_modules` can look up any operation offline. Operations newer than your installed release still work through `execute()`; pick up their types with the next upgrade.

## Support

Questions and bug reports: [github.com/GoliathData/sdk/issues](https://github.com/GoliathData/sdk/issues).

## License

MIT
