<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getPipelineAnalytics

query · domain `deals` · requires the ADMIN scope

Per-pipeline outcome analytics for a reporting period (SEVEN_DAYS | FOURTEEN_DAYS | THIRTY_DAYS | YEAR_TO_DATE; default THIRTY_DAYS) — won/lost/active deal counts, average stage duration, and the current stage mix of each pipeline. Data is a nightly snapshot — see asOfDate. Requires the ADMIN scope (key owner must be a team admin).

## Call

```ts
const result = await client.deals.getPipelineAnalytics()
// → Promise<GetPipelineAnalyticsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetPipelineAnalyticsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `period` | `AgentAnalyticsPeriod` | no | THIRTY_DAYS |

## Gateway notes

- The organization is derived from your API key — do not send an `orgId` variable (any value sent is ignored).
- Rate limited: shares the per-key analytics bucket; 429s carry a Retry-After header.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "teamAnalyticsQuery": {
    "agentPipelineInventory": {
      "asOfDate": true,
      "period": true,
      "reportingPeriod": true,
      "startDate": true,
      "endDate": true,
      "pipelines": {
        "pipelineId": true,
        "pipelineName": true,
        "wonDeals": true,
        "lostDeals": true,
        "activeDealsCount": true,
        "avgStageDurationDays": true,
        "currentStageMix": {
          "stageName": true,
          "dealCount": true
        }
      }
    }
  }
}
```
