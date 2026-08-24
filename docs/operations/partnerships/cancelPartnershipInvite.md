<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# cancelPartnershipInvite

mutation · domain `partnerships` · requires the ADMIN scope

Cancel a pending partnership invitation your organization initiated (partnerOrgId), before the partner has accepted it.

## Call

```ts
const result = await client.partnerships.cancelPartnershipInvite({ partnerOrgId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CancelPartnershipInviteMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CancelPartnershipInviteMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "cancelInvitation": {
      "id": true,
      "status": true,
      "updatedAt": true
    }
  }
}
```
