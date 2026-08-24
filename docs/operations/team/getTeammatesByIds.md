<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getTeammatesByIds

query · domain `team` · requires the READ scope

Resolve teammate USER IDS to names — pass userIds, get back id, firstName, lastName, email for each. This is the id → person lookup, and the ONLY one: listTeammates searches names, emails and phone numbers and returns at most 20 rows, so it cannot answer "who is <uuid>" in an organization larger than that. Reach for this whenever you are about to REPORT a bare user id to someone — a filter's `userId`, a task's `participants`, a note author — because "owned by 4f3c…" is not an answer a person can act on. Ids outside your organization are rejected; nothing here reveals a user in another org.

## Call

```ts
const result = await client.team.getTeammatesByIds({ userIds: ['<id>'] })
// → Promise<GetTeammatesByIdsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetTeammatesByIdsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `userIds` | `[ID!]!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "teamQuery": {
    "getTeamMembersByIds": {
      "id": true,
      "firstName": true,
      "lastName": true,
      "email": true
    }
  }
}
```
