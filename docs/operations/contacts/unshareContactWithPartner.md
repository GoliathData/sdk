<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# unshareContactWithPartner

mutation · domain `contacts` · requires the WRITE scope

Stop sharing a contact with a partner organization: the partner's users lose access to their copy (revokedUsersCount), and sharing it again makes them a new one, never theirs back. Asks by the person's Delete for good trust.

## Call

```ts
const result = await client.contacts.unshareContactWithPartner({ contactId: '<id>', partnerOrganizationId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UnshareContactWithPartnerMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UnshareContactWithPartnerMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |
| `partnerOrganizationId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "unshareContact": {
      "baseContactId": true,
      "copiedContactId": true,
      "revokedUsersCount": true
    }
  }
}
```
