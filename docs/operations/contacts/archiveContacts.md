<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# archiveContacts

mutation · domain `contacts` · requires the WRITE scope

Archive (soft-delete) contacts. Async bulk job: returns a bulkTaskId to poll with getBulkTask. Archived contacts drop out of the CRM but are recoverable: unarchiveContacts restores them (bulk), updateContact(isArchived: false) one. Nothing is destroyed: notes, activities, tags and pipeline items survive and come back with the contact. SELECTION, one of two forms: `contactIds`, or a contact filter (`filterId` from listContactFilters, or an inline `filterTree` in saveFilter’s CONTACT DSL, parsed strictly) with `selectCount: N`, the first N matches: count the filter with countContacts and pass that count. A filter without selectCount, or beside contactIds, is refused. At most 20,000 contacts per call.

## Call

```ts
const result = await client.contacts.archiveContacts(undefined, { idempotencyKey: crypto.randomUUID() })
// → Promise<ArchiveContactsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ArchiveContactsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[String!]` | no | — |
| `filterId` | `ID` | no | — |
| `filterTree` | `JSON` | no | — |
| `selectCount` | `Int` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "archiveContacts": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
