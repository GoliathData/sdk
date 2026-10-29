<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getGoalPlan

query · domain `team` · requires the READ scope

Your goals for the month containing periodStartDate (YYYY-MM-DD): draftPlan (being edited) and activePlan (published), either null. Commission goals are targetCents per pipeline (null pipelineId = all pipelines); metric EARNED counts won deals, TOTAL adds pending ones. Personal goals are free text. Your own plan; a teammate’s is the *Teammate* op (ADMIN).

## Call

```ts
const result = await client.team.getGoalPlan({ periodStartDate: <Date> })
// → Promise<GetGoalPlanQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetGoalPlanQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `periodStartDate` | `Date!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "agentGoalsQuery": {
    "getAgentGoalPlan": {
      "draftPlan": {
        "id": true,
        "userId": true,
        "periodStartDate": true,
        "periodEndDate": true,
        "status": true,
        "publishedAt": true,
        "commissionGoals": {
          "id": true,
          "pipelineId": true,
          "pipelineName": true,
          "metric": true,
          "targetCents": true
        },
        "personalGoals": {
          "id": true,
          "title": true,
          "description": true,
          "status": true,
          "displayOrder": true
        }
      },
      "activePlan": {
        "id": true,
        "userId": true,
        "periodStartDate": true,
        "periodEndDate": true,
        "status": true,
        "publishedAt": true,
        "commissionGoals": {
          "id": true,
          "pipelineId": true,
          "pipelineName": true,
          "metric": true,
          "targetCents": true
        },
        "personalGoals": {
          "id": true,
          "title": true,
          "description": true,
          "status": true,
          "displayOrder": true
        }
      }
    }
  }
}
```
