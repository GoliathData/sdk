<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# moveItemsToFolder

mutation · domain `properties` · requires the WRITE scope

File items into a folder (`folderId`), or to the top level (`folderId: null`). `items` are `{ kind, id }`; kind is FILTER, CONTACT_LIST, PROPERTY_LIST, FORM, TEMPLATE, LIBRARY_FILE or WORKFLOW_GROUP. All or nothing: one id not found refuses the whole call. Refused when the folder's surface does not hold that kind. A saved filter's privacy FOLLOWS the folder: into a personal folder makes it private to you, into a shared one shares it with the team, so say so before moving a filter across. Returns how many moved.

## Call

```ts
const result = await client.properties.moveItemsToFolder({ items: [<FolderItemRef>] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<MoveItemsToFolderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `MoveItemsToFolderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `items` | `[FolderItemRef!]!` | yes | — |
| `folderId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "folderMutation": {
    "moveItemsToFolder": true
  }
}
```
