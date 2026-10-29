<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateTeammatePersonalGoalStatus

mutation · domain `team` · requires the ADMIN scope

A teammate's plan (`userId`, ADMIN; the key owner must be an org admin who sees the team directory): updatePersonalGoalStatus for them; ids from getTeammateGoalPlan.

## Call

```ts
const result = await client.team.updateTeammatePersonalGoalStatus({ userId: '<id>', goalId: '<id>', status: <AgentPersonalGoalStatus> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateTeammatePersonalGoalStatusMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateTeammatePersonalGoalStatusMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `userId` | `ID!` | yes | — |
| `goalId` | `ID!` | yes | — |
| `status` | `AgentPersonalGoalStatus!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

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
