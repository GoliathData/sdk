<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getCoverageCells

query · domain `coverage` · requires the READ scope

The Coverage page for a whole state (`stateAbbr`, e.g. TX) or up to 300 named counties (`countyFips`, five digits): one row per county and signal type (FORECLOSURE, PREFORECLOSURE, PROBATE, PREPROBATE, TAX_DELINQUENCY, CODE_VIOLATION). `status`: LIVE, IN_PROGRESS (we are building it; `expectedBy` is the promise on your own request), WAITING_ON_COUNTY (we asked the county for its records), NOT_AVAILABLE (`notAvailableReason`), NOT_REQUESTED. `delayed`: live but its source is failing; `partial`: delivering through a backstop, not live. `delivered30d` counts records in the last 30 days.

## Call

```ts
const result = await client.coverage.getCoverageCells()
// → Promise<GetCoverageCellsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetCoverageCellsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `stateAbbr` | `String` | no | — |
| `countyFips` | `[String!]` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "coverageQuery": {
    "countyCells": {
      "countyFips": true,
      "countyName": true,
      "stateAbbr": true,
      "family": true,
      "status": true,
      "delayed": true,
      "partial": true,
      "expectedBy": true,
      "pastPromise": true,
      "notAvailableReason": true,
      "requestedByMe": true,
      "requestedAt": true,
      "delivered30d": true
    }
  }
}
```
