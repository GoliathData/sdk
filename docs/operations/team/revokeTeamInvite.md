<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# revokeTeamInvite

mutation · domain `team` · requires the ADMIN scope

Revoke a team invitation by id (from createTeamInvite/listTeamInvites). The link stops working; isAlive becomes false. Only invitations in the caller's own organization can be revoked.

## Call

```ts
const result = await client.team.revokeTeamInvite({ invitationId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RevokeTeamInviteMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RevokeTeamInviteMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `invitationId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationMutation": {
    "revokeInvitation": {
      "id": true,
      "isAlive": true
    }
  }
}
```
