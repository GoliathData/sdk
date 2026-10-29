<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# shareContactsWithPartner

mutation · domain `contacts` · requires the WRITE scope

shareContactWithPartner for many contacts (contactIds), as a bulk task (bulkTaskId, getBulkTask). partnerOrganizationId from listPartnerships; assignments name the PARTNER org users who get it (userId, role POINT_PERSON | PARTICIPANT). include* choose what is copied (core, notes, calls, texts default true; tasks false).

## Call

```ts
const result = await client.contacts.shareContactsWithPartner({ contactIds: ['<text>'], partnerOrganizationId: '<id>', assignments: [<BulkShareContactUserAssignmentInput>] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ShareContactsWithPartnerMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ShareContactsWithPartnerMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[String!]!` | yes | — |
| `partnerOrganizationId` | `ID!` | yes | — |
| `assignments` | `[BulkShareContactUserAssignmentInput!]!` | yes | — |
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
    "bulkShareContacts": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
