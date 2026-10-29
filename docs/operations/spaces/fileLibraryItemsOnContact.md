<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# fileLibraryItemsOnContact

mutation · domain `spaces` · requires the WRITE scope

Put Library items on a contact's Files & Photos, as the contact's Attach › From Library does: a snapshot copy of each file (up to 20, 300 MB each), and a PAGE as its PDF printed now as you see it. Ids are Library item ids (searchSpaceItems, listSpaceFolder, a page's id), never a chat artifactId. Returns each copy (`uploadedFileId`, `fileName`); undo with removeContactFiles (the copy's `uploadedFileId`). Never put a Library item on a record as a link.

## Call

```ts
const result = await client.spaces.fileLibraryItemsOnContact({ itemIds: ['<id>'], contactId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<FileLibraryItemsOnContactMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `FileLibraryItemsOnContactMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `itemIds` | `[ID!]!` | yes | — |
| `contactId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "fileOnContact": {
      "uploadedFileId": true,
      "itemId": true,
      "fileName": true,
      "contentType": true,
      "sizeBytes": true
    }
  }
}
```
