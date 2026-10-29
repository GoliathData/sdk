<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getTeammateGoalPlan

query · domain `team` · requires the ADMIN scope

A teammate's plan (`userId`, ADMIN; the key owner must be an org admin who sees the team directory): getGoalPlan for them.

## Call

```ts
const result = await client.team.getTeammateGoalPlan({ userId: '<id>', periodStartDate: <Date> })
// → Promise<GetTeammateGoalPlanQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetTeammateGoalPlanQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `userId` | `ID!` | yes | — |
| `periodStartDate` | `Date!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

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
