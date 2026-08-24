<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createPartnershipInvite

mutation · domain `partnerships` · requires the ADMIN scope

Send a partnership invitation to another organization (partnerOrgId from lookupPartnerOrg). direction is SEND_ONLY, RECEIVE_ONLY, or BIDIRECTIONAL (whose leads flow to whom). permittedUserIds optionally limits which of your users are visible to the partner (empty = all); recipientUserIds optionally targets which partner admins are notified (empty = all). The partnership is PENDING until the partner org accepts.

## Call

```ts
const result = await client.partnerships.createPartnershipInvite({ partnerOrgId: '<id>', direction: <PartnershipDirection> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreatePartnershipInviteMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreatePartnershipInviteMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `partnerOrgId` | `ID!` | yes | — |
| `direction` | `PartnershipDirection!` | yes | — |
| `permittedUserIds` | `[ID!]` | no | — |
| `recipientUserIds` | `[ID!]` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "orgPartnershipMutation": {
    "createInvitation": {
      "id": true,
      "status": true,
      "direction": true,
      "partnerOrg": {
        "id": true,
        "name": true
      },
      "permittedUserIds": true,
      "createdAt": true,
      "updatedAt": true
    }
  }
}
```
