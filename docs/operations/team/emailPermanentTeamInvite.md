<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# emailPermanentTeamInvite

mutation · domain `team` · requires the ADMIN scope

Email the organization's PERMANENT (reusable) invite link to 1–50 addresses per request; duplicates are sent once and the validated batch is queued as one notification event. The link must already exist — create it once with createTeamInvite (isPermanent: true), or find it in listTeamInvites (isPermanent: true, isAlive: true); when the organization has none this is refused rather than minting one. Returns the permanent invitation (id maps to /accept-invite/{id}).

## Call

```ts
const result = await client.team.emailPermanentTeamInvite({ emails: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<EmailPermanentTeamInviteMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `EmailPermanentTeamInviteMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `emails` | `[String!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationMutation": {
    "emailPermanentLink": {
      "id": true,
      "isAlive": true,
      "isPermanent": true
    }
  }
}
```
