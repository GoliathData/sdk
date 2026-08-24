<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# unarchiveContacts

mutation · domain `contacts` · requires the WRITE scope

Restore archived contacts by id — the undo for archiveContacts ("we archived 300 by mistake, put them back"). Async bulk job — returns a bulkTaskId to poll with getBulkTask, so an immediate read-back will not yet show them active. A contact that is not archived is skipped, not failed, so it is safe to send a mixed set. It takes EXPLICIT ids, which is the part that needs planning: an archived contact is invisible to the ordinary reads, so find the ids first with findContacts(includeArchived: true) or filterContacts, whose results carry `isArchived`. Restore is not the reverse of every operation that archives, and mergeContacts is the case to watch: it RETIRES its losing records rather than archiving them, so they are not in findContacts(includeArchived: true) at all and unarchiveContacts cannot bring one back. There is no undo for a merge. Check how a contact came to be missing before offering restore as the fix.

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
