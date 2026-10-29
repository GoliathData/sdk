<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deletePersonalGoal

mutation · domain `team` · requires the WRITE scope

Delete a personal goal from a DRAFT plan for good; updatePersonalGoalStatus ARCHIVED keeps it. goalPlanId/goalId from getGoalPlan. Your own plan; a teammate’s is the *Teammate* op (ADMIN).

## Call

```ts
const result = await client.team.deletePersonalGoal({ goalId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeletePersonalGoalMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeletePersonalGoalMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `goalId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "agentGoalsMutation": {
    "deleteAgentPersonalGoal": true
  }
}
```
