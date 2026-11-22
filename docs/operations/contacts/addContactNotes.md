<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addContactNotes

mutation · domain `contacts` · requires the WRITE scope

Add ONE note, the same `body`, to every contact of a selection: the many-contact form of addContactNote (one call, never one per contact). Each contact gets its own timeline note, written as the key owner. A different note per contact is addContactNote per contact. Async bulk job: poll `bulkTaskId` with getBulkTask; a read-back right away will NOT show it. A body that @mentions anyone is refused (it would notify once per contact): mention them on one contact instead. A replayed task adds no second copy. Notes start no workflow. An AI employee adds its notes one contact at a time. SELECTION, one of two forms: `contactIds`, or a contact filter (`filterId` from listContactFilters, or an inline `filterTree` in saveFilter’s CONTACT DSL, parsed strictly) with `selectCount: N`, the first N matches: count the filter with countContacts and pass that count. A filter without selectCount, or beside contactIds, is refused. At most 20,000 contacts per call.

## Call

```ts
const result = await client.contacts.addContactNotes({ body: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddContactNotesMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddContactNotesMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[String!]` | no | — |
| `filterId` | `ID` | no | — |
| `filterTree` | `JSON` | no | — |
| `selectCount` | `Int` | no | — |
| `body` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "addNoteToContacts": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
