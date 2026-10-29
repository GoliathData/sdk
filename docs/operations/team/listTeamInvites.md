<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listTeamInvites

query · domain `team` · requires the ADMIN scope

List the organization's team invitations — pending (isAlive: true) and spent/revoked (isAlive: false), single-use and permanent; acceptUrl is a full link. A live single-use invite is someone not yet joined; remove one with revokeTeamInvite.

## Call

```ts
const result = await client.team.listTeamInvites()
// → Promise<ListTeamInvitesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListTeamInvitesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organization": {
    "id": true,
    "invitations": {
      "id": true,
      "acceptUrl": true,
      "isAlive": true,
      "isPermanent": true,
      "phoneRequired": true,
      "userType": true,
      "email": true,
      "createdAt": true
    }
  }
}
```
