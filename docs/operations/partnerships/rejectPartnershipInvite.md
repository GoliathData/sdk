<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# rejectPartnershipInvite

mutation · domain `partnerships` · requires the ADMIN scope

Reject a pending partnership invitation the other organization sent you (partnerOrgId). Terminates the pending rows.

## Call

```ts
const result = await client.partnerships.rejectPartnershipInvite({ partnerOrgId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RejectPartnershipInviteMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RejectPartnershipInviteMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `partnerOrgId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "orgPartnershipMutation": {
    "rejectInvitation": {
      "id": true,
      "status": true,
      "updatedAt": true
    }
  }
}
```
