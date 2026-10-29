<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listFolders

query · domain `properties` · requires the READ scope

Every folder on one surface (`scope`: PROPERTY, CONTACT, DEAL, FORM, …), flat: the org's shared tree plus your personal one. `ownerUserId` set = personal. `itemCount` counts items filed directly in it. Filter folders also come from listFilterFolders; workflow and template folders have their own ops.

## Call

```ts
const result = await client.properties.listFolders({ scope: <FolderScope> })
// → Promise<ListFoldersQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListFoldersQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `scope` | `FolderScope!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "folderQuery": {
    "folders": {
      "id": true,
      "name": true,
      "scope": true,
      "parentId": true,
      "ownerUserId": true,
      "displayOrder": true,
      "itemCount": true
    }
  }
}
```
