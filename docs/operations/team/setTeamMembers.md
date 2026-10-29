<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setTeamMembers

mutation · domain `team` · requires the ADMIN scope

Set a team's members. memberUserIds (active teammates, listTeamMembers) REPLACES the whole member list. Organization admins only.

## Call

```ts
const result = await client.team.setTeamMembers({ teamId: '<id>', memberUserIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetTeamMembersMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetTeamMembersMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `teamId` | `ID!` | yes | — |
| `memberUserIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "userGroupMutation": {
    "setMembers": {
      "id": true,
      "memberCount": true,
      "members": {
        "id": true,
        "email": true
      }
    }
  }
}
```
