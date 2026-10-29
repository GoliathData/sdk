<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# cancelCoverageRequest

mutation · domain `properties` · requires the ADMIN scope

Withdraw the org's request for one family in one county (countyFips): the request is deleted, and asking again starts a new one. Admins only. False when there was none.

## Call

```ts
const result = await client.properties.cancelCoverageRequest({ countyFips: '<text>', family: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CancelCoverageRequestMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CancelCoverageRequestMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `countyFips` | `String!` | yes | — |
| `family` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "coverageRequestMutation": {
    "cancelCoverageRequest": true
  }
}
```
