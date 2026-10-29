<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createGoalPlan

mutation · domain `team` · requires the WRITE scope

Open a DRAFT goal plan for the month containing periodStartDate, seeded with the active plan's commission goals; an existing draft is returned instead. Only a draft is edited; publishGoalPlan makes it the active plan. Your own plan; a teammate’s is the *Teammate* op (ADMIN).

## Call

```ts
const result = await client.team.createGoalPlan({ periodStartDate: <Date> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateGoalPlanMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateGoalPlanMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `periodStartDate` | `Date!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "agentGoalsMutation": {
    "createAgentGoalPlan": {
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
```
