<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# removeContactsFromList

mutation · domain `contacts` · requires the WRITE scope

Take contacts OFF one or more lists by list id: the removal twin of addContactsToList and the undo for a bulk add. The list survives with the rest of its members; deleteContactLists is the destructive one. Async bulk job: returns a bulkTaskId to poll with getBulkTask; an immediate read-back will not show the change. A contact not on the list is skipped, not failed. LIST ids only: a tag or custom-field id is refused at the gateway rather than silently dropped mid-job. POTENTIALLY OUTBOUND like the add side: removal publishes a tags-changed event that can trigger a CONTACT workflow. Needs their yes (Ask Goliath: bulk card). SELECTION, one of two forms: `contactIds`, or a contact filter (`filterId` from listContactFilters, or an inline `filterTree` in saveFilter’s CONTACT DSL, parsed strictly) with `selectCount: N`, the first N matches: count the filter with countContacts and pass that count. A filter without selectCount, or beside contactIds, is refused. At most 20,000 contacts per call.

## Call

```ts
const result = await client.contacts.removeContactsFromList({ listIds: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RemoveContactsFromListMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RemoveContactsFromListMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "removeContactsFromList": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
