<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# archiveContacts

mutation · domain `contacts` · requires the WRITE scope

Archive (soft-delete) contacts by id. Runs as an async bulk job — returns a bulkTaskId to poll with getBulkTask. Archived contacts drop out of the CRM but are recoverable, and unarchiveContacts is what recovers them (bulk); updateContact(isArchived: false) does one. Nothing is destroyed: notes, activities, tags and deals survive the archive and come back with the contact.

## Call

```ts
const result = await client.contacts.archiveContacts({ contactIds: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ArchiveContactsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ArchiveContactsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "archiveContacts": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
