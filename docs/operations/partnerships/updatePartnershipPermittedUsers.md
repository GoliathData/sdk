<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updatePartnershipPermittedUsers

mutation · domain `partnerships` · requires the ADMIN scope

Update which of your organization's users are visible to a partner when they send leads (partnerOrgId). Pass the full permittedUserIds list; an empty array means all users are visible.

## Call

```ts
const result = await client.partnerships.updatePartnershipPermittedUsers({ partnerOrgId: '<id>', permittedUserIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdatePartnershipPermittedUsersMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdatePartnershipPermittedUsersMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `partnerOrgId` | `ID!` | yes | — |
| `permittedUserIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "orgPartnershipMutation": {
    "updatePermittedUsers": {
      "id": true,
      "permittedUserIds": true,
      "updatedAt": true
    }
  }
}
```
