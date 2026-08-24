<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listTeammates

query · domain `team` · requires the READ scope

List teammates in your organization (optionally filtered by a search term). Use the returned userId with updateContact (addCollaborators).

## Call

```ts
const result = await client.team.listTeammates()
// → Promise<ListTeammatesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListTeammatesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `searchTerm` | `String` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "teamQuery": {
    "getTeamAutocomplete": {
      "userId": true,
      "firstName": true,
      "lastName": true,
      "email": true,
      "phoneNumber": true
    }
  }
}
```
