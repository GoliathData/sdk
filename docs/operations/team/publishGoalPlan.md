<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# publishGoalPlan

mutation · domain `team` · requires the WRITE scope

Publish a DRAFT plan (planId from getGoalPlan): it becomes the month's active plan, the one Agent Performance tracks, and the previous active plan is archived. Confirm with the user first. Your own plan; a teammate’s is the *Teammate* op (ADMIN).

## Call

```ts
const result = await client.team.publishGoalPlan({ planId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<PublishGoalPlanMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PublishGoalPlanMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `planId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "agentGoalsMutation": {
    "publishAgentGoalPlan": {
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
