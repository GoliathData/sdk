<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# unarchiveContacts

mutation · domain `contacts` · requires the WRITE scope

Restore archived contacts by id: the undo for archiveContacts. Async bulk job: returns a bulkTaskId to poll with getBulkTask, so an immediate read-back will not yet show them active. A contact that is not archived is skipped, not failed. Find ids with findContacts (archived contacts included, marked `isArchived`) or filterContacts. mergeContacts RETIRES its losers rather than archiving them: no read finds them, this cannot restore them, and a merge has no undo. Check how a contact went missing before offering restore.

## Call

```ts
const result = await client.contacts.unarchiveContacts({ contactIds: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UnarchiveContactsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UnarchiveContactsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[String!]!` | yes | — |

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
