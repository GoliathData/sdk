<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listSpaceTrash

query · domain `spaces` · requires the READ scope

The "Trash" view: what was trashed (by anyone) that you can see, with `trashedAt`. Trashed items are deleted for good 30 days later; restoreSpaceItems brings them back.

## Call

```ts
const result = await client.spaces.listSpaceTrash()
// → Promise<ListSpaceTrashQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListSpaceTrashQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesQuery": {
    "trash": {
      "id": true,
      "spaceId": true,
      "spaceName": true,
      "parentId": true,
      "kind": true,
      "name": true,
      "fileType": true,
      "sizeBytes": true,
      "viewerRole": true,
      "path": {
        "id": true,
        "name": true
      },
      "updatedAt": true,
      "trashedAt": true
    }
  }
}
```
