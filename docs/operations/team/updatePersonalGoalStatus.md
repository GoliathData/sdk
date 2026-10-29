<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updatePersonalGoalStatus

mutation · domain `team` · requires the WRITE scope

Mark a personal goal ACTIVE, COMPLETED or ARCHIVED, on a draft or active plan (not an archived one). goalPlanId/goalId from getGoalPlan. Your own plan; a teammate’s is the *Teammate* op (ADMIN).

## Call

```ts
const result = await client.team.updatePersonalGoalStatus({ goalId: '<id>', status: <AgentPersonalGoalStatus> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdatePersonalGoalStatusMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdatePersonalGoalStatusMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `goalId` | `ID!` | yes | — |
| `status` | `AgentPersonalGoalStatus!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "agentGoalsMutation": {
    "updateAgentPersonalGoalStatus": {
      "id": true,
      "goalPlanId": true,
      "title": true,
      "status": true
    }
  }
}
```
