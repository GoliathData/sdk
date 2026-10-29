<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createTeam

mutation · domain `team` · requires the ADMIN scope

Create a team (name, optional description, emoji, color, memberUserIds). Organization admins only.

## Call

```ts
const result = await client.team.createTeam({ name: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateTeamMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateTeamMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `name` | `String!` | yes | — |
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
    "create": {
      "id": true,
      "name": true,
      "memberCount": true
    }
  }
}
```
