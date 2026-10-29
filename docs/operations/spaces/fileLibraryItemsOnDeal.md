<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# fileLibraryItemsOnDeal

mutation · domain `spaces` · requires the WRITE scope

fileLibraryItemsOnContact for a deal's files: a snapshot copy of each Library file, a page as its PDF. Library item ids, never a chat artifactId (that is attachDealFile). Undo with removeDealFile (the copy's `uploadedFileId`).

## Call

```ts
const result = await client.spaces.fileLibraryItemsOnDeal({ itemIds: ['<id>'], dealId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<FileLibraryItemsOnDealMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `FileLibraryItemsOnDealMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `itemIds` | `[ID!]!` | yes | — |
| `dealId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "fileOnDeal": {
      "uploadedFileId": true,
      "itemId": true,
      "fileName": true,
      "contentType": true,
      "sizeBytes": true
    }
  }
}
```
