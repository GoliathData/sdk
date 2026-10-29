<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# renameFolder

mutation · domain `properties` · requires the WRITE scope

Rename a folder by id (listFolders); a name a sibling already has is refused. For a saved-filter folder prefer renameFilterFolder, which merges into a same-named sibling as the app does.

## Call

```ts
const result = await client.properties.renameFolder({ folderId: '<id>', name: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RenameFolderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RenameFolderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `folderId` | `ID!` | yes | — |
| `name` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "folderMutation": {
    "renameFolder": {
      "id": true,
      "name": true,
      "parentId": true,
      "ownerUserId": true
    }
  }
}
```
