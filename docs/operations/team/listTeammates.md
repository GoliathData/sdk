<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listTeammates

query · domain `team` · requires the READ scope

Fuzzy-search ACTIVE teammates by name, email or phone (optional searchTerm; omit it for an alphabetical page). This is the PICKER, not the roster: it returns at most `limit` rows (default 20, maximum 50), ranked by match quality, and SUSPENDED members are excluded at the query — so a page that comes back full may be a truncated page, and a person missing from it may be removed rather than absent. For the whole team, for anyone's role, or to tell a current member from a removed one, use listTeamMembers; to resolve a bare user id, use getTeammatesByIds. Use the returned userId with updateContact (addCollaborators), assignContact, and the userIds filter on findDeals.

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
| `limit` | `Int` | no | 20 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.

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
