<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# changeTeamMemberRole

mutation · domain `team` · requires the ADMIN scope

Change a teammate's ROLE, the team page's Change Role: ADMIN (every permission, and the role every ADMIN-scoped operation needs; moving to it drops the member's permission settings) or MEMBER (what they may do is their permissions, set by an admin in the app). userId comes from listTeamMembers, which also shows the current role. It takes effect at once. Refused when it would leave the organization with no active admin (the only admin demoting themself). Organization admins only. Returns the member with their new organizationRole.

## Call

```ts
const result = await client.team.changeTeamMemberRole({ userId: '<id>', role: <OrganizationToUserMappingType> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ChangeTeamMemberRoleMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ChangeTeamMemberRoleMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `userId` | `ID!` | yes | — |
| `role` | `OrganizationToUserMappingType!` | yes | — |

## Gateway notes

- The organization is derived from your API key — do not send an `organizationId` variable (any value sent is ignored).
- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationMutation": {
    "changeUserRole": {
      "id": true,
      "organizationRole": true
    }
  }
}
```
