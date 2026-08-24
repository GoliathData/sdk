<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getFormAnalytics

query · domain `forms` · requires the READ scope

Conversion funnel for one form over a date range - views, starts, submits, the start/submit/submit-of-started rates (0-1 fractions), median seconds-to-submit, plus a per-day time series. startDate and endDate are ISO YYYY-MM-DD; ranges longer than 90 days are rejected.

## Call

```ts
const result = await client.forms.getFormAnalytics({ formId: '<id>', startDate: '<text>', endDate: '<text>' })
// → Promise<GetFormAnalyticsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetFormAnalyticsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "analyticsFunnel": {
      "funnel": {
        "views": true,
        "starts": true,
        "submits": true,
        "startRate": true,
        "submitRate": true,
        "submitRateOfStarted": true,
        "p50SecondsToSubmit": true
      },
      "funnelDaily": {
        "viewDate": true,
        "views": true,
        "starts": true,
        "submits": true
      }
    }
  }
}
```
