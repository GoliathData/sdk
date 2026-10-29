<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateTeam

mutation · domain `team` · requires the ADMIN scope

Edit a team (teamId from listTeams); omitted fields are untouched. memberUserIds (active teammates, listTeamMembers) REPLACES the whole member list. Organization admins only.

## Call

```ts
const result = await client.team.updateTeam({ teamId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateTeamMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateTeamMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `teamId` | `ID!` | yes | — |
| `name` | `String` | no | — |
| `description` | `String` | no | — |
| `emoji` | `String` | no | — |
| `color` | `String` | no | — |
| `memberUserIds` | `[ID!]` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "userGroupMutation": {
    "update": {
      "id": true,
      "name": true,
      "description": true,
      "memberCount": true
    }
  }
}
```
