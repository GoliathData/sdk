<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# reorderFolders

mutation · domain `properties` · requires the WRITE scope

Set the order of one set of sibling folders: `scope`, their `parentId` (null = top level), `personal` (which side), and `orderedIds` first to last. An id outside that set refuses the call; siblings you leave out keep their order after the listed ones. Returns the surface's folders.

## Call

```ts
const result = await client.properties.reorderFolders({ scope: <FolderScope>, personal: false, orderedIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ReorderFoldersMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ReorderFoldersMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `scope` | `FolderScope!` | yes | — |
| `parentId` | `ID` | no | — |
| `personal` | `Boolean!` | yes | — |
| `orderedIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "folderMutation": {
    "reorderFolders": {
      "id": true,
      "name": true,
      "parentId": true,
      "displayOrder": true
    }
  }
}
```
