<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getTeamMemberCapabilities

query · domain `team` · requires the ADMIN scope

A teammate's permissions, as Manage permissions on their row shows them: every capability they HOLD (one missing is one they do not have). userId comes from listTeamMembers. An Admin holds all of them. Read it before grantTeamMemberCapability or revokeTeamMemberCapability to say what changes. Organization admins only; your own permissions are getMyCapabilities.

## Call

```ts
const result = await client.team.getTeamMemberCapabilities({ userId: '<id>' })
// → Promise<GetTeamMemberCapabilitiesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetTeamMemberCapabilitiesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `userId` | `ID!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "teamQuery": {
    "getTeamMemberCapabilities": true
  }
}
```
