<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteTeammatePersonalGoal

mutation · domain `team` · requires the ADMIN scope

A teammate's plan (`userId`, ADMIN; the key owner must be an org admin who sees the team directory): deletePersonalGoal for them (for good; ARCHIVED status keeps it); ids from getTeammateGoalPlan.

## Call

```ts
const result = await client.team.deleteTeammatePersonalGoal({ userId: '<id>', goalId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteTeammatePersonalGoalMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteTeammatePersonalGoalMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `userId` | `ID!` | yes | — |
| `goalId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "agentGoalsMutation": {
    "deleteAgentPersonalGoal": true
  }
}
```
