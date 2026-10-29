<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getCoverageAvailability

query · domain `coverage` · requires the READ scope

Whether each named signal type (a property signal type, e.g. FORECLOSURE or TAX_DELINQUENT) is live across your organization's counties (its markets): LIVE, BUILDING, REQUESTED, NOT_REQUESTED (nobody asked yet) or NO_PRODUCT (we have no coverage for that type). Per type `liveCounties` of `totalCounties`, each county's own status, and `promised` (every county not live holds a promised request: nothing to ask).

## Call

```ts
const result = await client.coverage.getCoverageAvailability({ signalTypes: ['<text>'] })
// → Promise<GetCoverageAvailabilityQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetCoverageAvailabilityQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `signalTypes` | `[String!]!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "coverageQuery": {
    "availability": {
      "signalType": true,
      "family": true,
      "status": true,
      "promised": true,
      "liveCounties": true,
      "totalCounties": true,
      "counties": {
        "countyFips": true,
        "countyName": true,
        "stateAbbr": true,
        "status": true
      }
    }
  }
}
```
