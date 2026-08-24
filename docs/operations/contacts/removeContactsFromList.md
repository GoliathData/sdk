<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# removeContactsFromList

mutation · domain `contacts` · requires the WRITE scope

Take contacts OFF one or more lists by list id — the removal twin of addContactsToList, and the undo for a bulk add. The list itself survives with the rest of its membership intact; deleteContactLists is the destructive one. Async bulk job — returns a bulkTaskId to poll with getBulkTask; an immediate read-back will not show the change. A contact not on the list is skipped, not failed. Pass LIST ids only — a tag or custom-field id is refused at the gateway rather than silently dropped mid-job. POTENTIALLY OUTBOUND for the same reason as the add side: removal publishes a tags-changed event and a CONTACT workflow can be triggered by it. Check or confirm before a large selection.

## Call

```ts
const result = await client.contacts.removeContactsFromList({ contactIds: ['<text>'], listIds: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RemoveContactsFromListMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RemoveContactsFromListMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[String!]!` | yes | — |
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
