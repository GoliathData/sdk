<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# unarchiveContacts

mutation · domain `contacts` · requires the WRITE scope

Restore archived contacts: the undo for archiveContacts. Async bulk job: returns a bulkTaskId to poll with getBulkTask, so an immediate read-back will not yet show them active. A contact that is not archived is skipped, not failed. Find ids with findContacts (archived contacts included, marked `isArchived`) or filterContacts; a filter selection needs `prospectArchiveStatus: ARCHIVED`, since a contact filter hides archived contacts. mergeContacts RETIRES its losers rather than archiving them: no read finds them, this cannot restore them, and a merge has no undo. Check how a contact went missing before offering restore. SELECTION, one of two forms: `contactIds`, or a contact filter (`filterId` from listContactFilters, or an inline `filterTree` in saveFilter’s CONTACT DSL, parsed strictly) with `selectCount: N`, the first N matches: count the filter with countContacts and pass that count. A filter without selectCount, or beside contactIds, is refused. At most 20,000 contacts per call.

## Call

```ts
const result = await client.contacts.unarchiveContacts(undefined, { idempotencyKey: crypto.randomUUID() })
// → Promise<UnarchiveContactsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UnarchiveContactsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "unarchiveContacts": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
