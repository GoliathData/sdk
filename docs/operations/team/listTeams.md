<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listTeams

query · domain `team` · requires the READ scope

The organization's teams (groups of teammates a contact or form can be given to), newest first, with their members; `search` narrows by name.

## Call

```ts
const result = await client.team.listTeams()
// → Promise<ListTeamsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListTeamsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `search` | `String` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "userGroupQuery": {
    "list": {
      "id": true,
      "name": true,
      "description": true,
      "memberCount": true,
      "members": {
        "id": true,
        "firstName": true,
        "lastName": true,
        "email": true
      }
    }
  }
}
```
