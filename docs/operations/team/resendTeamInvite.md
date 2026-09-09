<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# resendTeamInvite

mutation · domain `team` · requires the ADMIN scope

Re-send a team invitation by id (from listTeamInvites) — the same invitation email goes out again to the same address. The invitation itself is unchanged: same id, same accept URL /accept-invite/{id}, so use this for "she never got the email" rather than creating a second invite. Only a LIVE invitation WITH A RECIPIENT can be re-sent (isAlive: true, email set): a spent or revoked one is refused — create a new one with createTeamInvite instead — and a PERMANENT link is refused too, because it has nobody to send to; email that one with emailPermanentTeamInvite. Only invitations in the caller's own organization can be re-sent.

## Call

```ts
const result = await client.team.resendTeamInvite({ invitationId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ResendTeamInviteMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ResendTeamInviteMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "resendInvitation": {
      "id": true,
      "isAlive": true,
      "isPermanent": true,
      "email": true
    }
  }
}
```
