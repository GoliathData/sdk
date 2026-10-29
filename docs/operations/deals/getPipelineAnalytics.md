<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getPipelineAnalytics

query · domain `deals` · requires the ADMIN scope

Per-pipeline TRENDS for a rolling period (SEVEN_DAYS | FOURTEEN_DAYS | THIRTY_DAYS | YEAR_TO_DATE; THIRTY_DAYS is the last 30 days, not this month) from a NIGHTLY snapshot (asOfDate): stage duration, stage mix, won/lost/active. wonDeals / lostDeals count EVENTS (moves into a won or lost stage in the window, archived deals included) and miss moves since the snapshot, so they can disagree with the deals as they stand: for "how many won", a win rate or money use findDeals `totals` (outcome WON / LOST, a stageChanged window). Requires the ADMIN scope.

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
