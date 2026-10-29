<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# shareContactWithPartner

mutation · domain `contacts` · requires the WRITE scope

Share one contact with a partner organization, the contact page's Share: the partner gets its own copy. partnerOrganizationId from listPartnerships; assignments name the PARTNER org users who get it (userId, role POINT_PERSON | PARTICIPANT). include* choose what is copied (core, notes, calls, texts default true; tasks false). unshareContactWithPartner takes it back.

## Call

```ts
const result = await client.contacts.shareContactWithPartner({ contactId: '<id>', partnerOrganizationId: '<id>', assignments: [<ShareContactUserAssignmentInput>] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ShareContactWithPartnerMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ShareContactWithPartnerMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |
| `partnerOrganizationId` | `ID!` | yes | — |
| `assignments` | `[ShareContactUserAssignmentInput!]!` | yes | — |
| `includeContactCore` | `Boolean` | no | — |
| `includeTasks` | `Boolean` | no | — |
| `includeNotes` | `Boolean` | no | — |
| `includeCalls` | `Boolean` | no | — |
| `includeTexts` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "shareContact": {
      "baseContactId": true,
      "copiedContactId": true
    }
  }
}
```
