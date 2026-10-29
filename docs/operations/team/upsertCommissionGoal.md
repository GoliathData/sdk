<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# upsertCommissionGoal

mutation · domain `team` · requires the WRITE scope

Set a commission target on a DRAFT plan: targetCents (> 0, cents), metric EARNED | TOTAL, pipelineId (null = all pipelines). Pass the goal's id to change it; without one a new goal is added. goalPlanId/goalId from getGoalPlan. Your own plan; a teammate’s is the *Teammate* op (ADMIN).

## Call

```ts
const result = await client.team.upsertCommissionGoal({ goalPlanId: '<id>', metric: <AgentCommissionGoalMetric>, targetCents: <BigInt> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpsertCommissionGoalMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpsertCommissionGoalMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `goalPlanId` | `ID!` | yes | — |
| `id` | `ID` | no | — |
| `pipelineId` | `ID` | no | — |
| `metric` | `AgentCommissionGoalMetric!` | yes | — |
| `targetCents` | `BigInt!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "agentGoalsMutation": {
    "upsertAgentCommissionGoal": {
      "id": true,
      "goalPlanId": true,
      "pipelineId": true,
      "pipelineName": true,
      "metric": true,
      "targetCents": true
    }
  }
}
```
