<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addContactsToList

mutation · domain `contacts` · requires the WRITE scope

Add contacts to one or more LISTS (segments) by list id, from searchContactTags `lists` / createContactList. The selection-wide form of updateContact’s addToListIds; removeContactsFromList is the twin. Async bulk job — returns a bulkTaskId to poll with getBulkTask; an immediate read-back will not show the change. A contact already on the list is skipped, not failed, so re-running is harmless. Pass LIST ids only — a free-form tag or custom-field id is refused at the gateway rather than silently dropped by the worker (which is what the underlying action does with one, completing the task having changed nothing). POTENTIALLY OUTBOUND: list membership publishes the same contact tags-changed event tags do, so a CONTACT workflow triggered on this list can start a run and send. Check the org’s workflows or confirm with the user before a large selection.

## Call

```ts
const result = await client.contacts.addContactsToList({ contactIds: ['<text>'], listIds: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddContactsToListMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddContactsToListMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "addContactsToList": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
