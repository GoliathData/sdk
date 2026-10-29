<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# upsertPersonalGoal

mutation · domain `team` · requires the WRITE scope

Add (no id) or edit (id) a personal goal on a DRAFT plan: title, optional description and displayOrder. goalPlanId/goalId from getGoalPlan. Your own plan; a teammate’s is the *Teammate* op (ADMIN).

## Call

```ts
const result = await client.team.upsertPersonalGoal({ goalPlanId: '<id>', title: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpsertPersonalGoalMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpsertPersonalGoalMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `goalPlanId` | `ID!` | yes | — |
| `id` | `ID` | no | — |
| `title` | `String!` | yes | — |
| `description` | `String` | no | — |
| `displayOrder` | `Int` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "agentGoalsMutation": {
    "upsertAgentPersonalGoal": {
      "id": true,
      "goalPlanId": true,
      "title": true,
      "description": true,
      "status": true,
      "displayOrder": true
    }
  }
}
```
