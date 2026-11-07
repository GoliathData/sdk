<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addContactsToList

mutation · domain `contacts` · requires the WRITE scope

Add contacts to one or more LISTS (segments) by list id (searchContactTags `lists` / createContactList): the selection-wide form of updateContact’s addToListIds; removeContactsFromList is the twin. Async bulk job: returns a bulkTaskId to poll with getBulkTask; an immediate read-back will not show the change. A contact already on the list is skipped, not failed, so re-running is harmless. LIST ids only: a free-form tag or custom-field id is refused at the gateway (the underlying worker would silently drop it and complete having changed nothing). POTENTIALLY OUTBOUND: list membership publishes the same tags-changed event tags do, so a CONTACT workflow triggered on this list can start a run and send. Check the org’s workflows or confirm with the user before a large selection. SELECTION, one of two forms: `contactIds`, or a contact filter (`filterId` from listContactFilters, or an inline `filterTree` in saveFilter’s CONTACT DSL, parsed strictly) with `selectCount: N`, the first N matches: count the filter with countContacts and pass that count. A filter without selectCount, or beside contactIds, is refused. At most 20,000 contacts per call.

## Call

```ts
const result = await client.contacts.addContactsToList({ listIds: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddContactsToListMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddContactsToListMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[String!]` | no | — |
| `filterId` | `ID` | no | — |
| `filterTree` | `JSON` | no | — |
| `selectCount` | `Int` | no | — |
| `listIds` | `[String!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "addContactsToList": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
