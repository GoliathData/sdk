<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listPipelineTransitions

query · domain `deals` · requires the ADMIN scope

Stage-to-stage deal movement (the funnel) for a reporting period (same period values as getPipelineAnalytics), optionally narrowed to one pipelineId — per transition: deal counts, exits from the source stage, and won/lost outcomes. Data is a nightly snapshot — see asOfDate. Requires the ADMIN scope (key owner must be a team admin).

## Call

```ts
const result = await client.deals.listPipelineTransitions()
// → Promise<ListPipelineTransitionsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListPipelineTransitionsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineId` | `ID` | no | — |
| `period` | `AgentAnalyticsPeriod` | no | THIRTY_DAYS |

## Gateway notes

- The organization is derived from your API key — do not send an `orgId` variable (any value sent is ignored).
- Rate limited: shares the per-key analytics bucket; 429s carry a Retry-After header.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "teamAnalyticsQuery": {
    "agentPipelineTransitions": {
      "asOfDate": true,
      "pipelineId": true,
      "pipelineName": true,
      "fromStageId": true,
      "fromStageName": true,
      "toStageId": true,
      "toStageName": true,
      "transitionDealsCount": true,
      "fromStageExitDealsCount": true,
      "wonTransitionDealsCount": true,
      "lostTransitionDealsCount": true,
      "transitionsToWonStage": true,
      "transitionsToLostStage": true
    }
  }
}
```
