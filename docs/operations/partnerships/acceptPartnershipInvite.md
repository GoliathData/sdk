<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# acceptPartnershipInvite

mutation · domain `partnerships` · requires the ADMIN scope

Accept a pending partnership invitation from another organization (partnerOrgId). permittedUserIds optionally limits which of your users are visible to the partner (empty = all). Only applies to invitations the partner initiated. Moves the partnership to ACTIVE.

## Call

```ts
const result = await client.partnerships.acceptPartnershipInvite({ partnerOrgId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AcceptPartnershipInviteMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AcceptPartnershipInviteMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `partnerOrgId` | `ID!` | yes | — |
| `permittedUserIds` | `[ID!]` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "orgPartnershipMutation": {
    "acceptInvitation": {
      "id": true,
      "status": true,
      "direction": true,
      "partnerOrg": {
        "id": true,
        "name": true
      },
      "permittedUserIds": true,
      "updatedAt": true
    }
  }
}
```
