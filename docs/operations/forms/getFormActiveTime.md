<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getFormActiveTime

query · domain `forms` · requires the READ scope

Daily active-engagement time on one form over a date range - per day: session count and active-millisecond percentiles (p50/p90), split by submitted vs abandoned sessions. startDate and endDate are ISO YYYY-MM-DD; ranges longer than 90 days are rejected.

## Call

```ts
const result = await client.forms.getFormActiveTime({ formId: '<id>', startDate: '<text>', endDate: '<text>' })
// → Promise<GetFormActiveTimeQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetFormActiveTimeQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `formId` | `ID!` | yes | — |
| `startDate` | `String!` | yes | — |
| `endDate` | `String!` | yes | — |

## Gateway notes

- Rate limited: shares the per-key analytics bucket; 429s carry a Retry-After header.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "embedFormQuery": {
    "analyticsActiveTime": {
      "viewDate": true,
      "sessions": true,
      "p50ActiveMs": true,
      "p90ActiveMs": true,
      "medianActiveMsSubmitted": true,
      "medianActiveMsAbandoned": true
    }
  }
}
```
