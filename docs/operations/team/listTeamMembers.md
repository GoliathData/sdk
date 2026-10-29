<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listTeamMembers

query · domain `team` · requires the READ scope

List EVERY member of your organization with their membership facts — the roster. Offset-paginated (offset + limit; limit defaults to 50, maximum 100; newest member first), so walk pages until one comes back short rather than treating the first page as the whole team. Each row carries organizationRole (ADMIN | MEMBER — ADMIN is the role every ADMIN-scoped operation requires of the key owner) and organizationMembershipStatus (ACTIVE | SUSPENDED). REMOVED MEMBERS ARE INCLUDED: a suspended person is still a row here, so filter on organizationMembershipStatus before reporting who is on the team, and never read a row's presence as "currently works here". Optional searchTerm is a SUBSTRING match on name and email for a plain term and on the id for a uuid; a phone number is matched ONLY when the term is a complete US number (a partial such as the last four digits is searched as a name/email substring and finds no phone — an empty page there is not evidence nobody has the number). Plain terms rank by similarity; a complete email, phone or uuid keeps newest-first and can also return members whose value contains it. Capabilities are not here: the key owner's own come from getMyCapabilities, and an admin reads a teammate's with getTeamMemberCapabilities. Use listTeammates instead when you only need to pick one active person by a partial name.

## Call

```ts
const result = await client.team.listTeamMembers()
// → Promise<ListTeamMembersQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListTeamMembersQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `searchTerm` | `String` | no | — |
| `offset` | `Int` | no | 0 |
| `limit` | `Int` | no | 50 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 100.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "teamQuery": {
    "listTeamMembers": {
      "id": true,
      "firstName": true,
      "lastName": true,
      "email": true,
      "phoneNumber": true,
      "organizationRole": true,
      "organizationMembershipStatus": true,
      "createdAt": true
    }
  }
}
```
