<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listSpaceFolder

query · domain `spaces` · requires the READ scope

One folder's files and folders only (a root when `folderId` is omitted). Team's templates, forms, contracts, tables are never listed here: count them with listContentTemplates, listForms, listContractTemplates, listWorkflowTables before saying what Team or Library holds; an empty Team root is not an empty Team. Folders first, then files, by name; each item has `abilities`, `fileType`, size, owner, creator and `path`. Items you cannot see are not returned.

## Call

```ts
const result = await client.spaces.listSpaceFolder({ spaceId: '<id>' })
// → Promise<ListSpaceFolderQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListSpaceFolderQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `spaceId` | `ID!` | yes | — |
| `folderId` | `ID` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesQuery": {
    "folder": {
      "space": {
        "id": true,
        "kind": true,
        "name": true
      },
      "folder": {
        "id": true,
        "spaceId": true,
        "spaceName": true,
        "parentId": true,
        "kind": true,
        "name": true,
        "description": true,
        "fileType": true,
        "sizeBytes": true,
        "accessMode": true,
        "systemLocked": true,
        "viewerRole": true,
        "abilities": {
          "addChildren": true,
          "edit": true,
          "move": true,
          "trash": true,
          "share": true
        },
        "owner": {
          "id": true,
          "name": true
        },
        "createdBy": {
          "kind": true,
          "label": true
        },
        "childCount": true,
        "shareCount": true,
        "currentVersion": {
          "id": true,
          "versionNumber": true
        },
        "path": {
          "id": true,
          "name": true
        },
        "updatedAt": true,
        "trashedAt": true
      },
      "items": {
        "id": true,
        "spaceId": true,
        "spaceName": true,
        "parentId": true,
        "kind": true,
        "name": true,
        "description": true,
        "fileType": true,
        "sizeBytes": true,
        "accessMode": true,
        "systemLocked": true,
        "viewerRole": true,
        "abilities": {
          "addChildren": true,
          "edit": true,
          "move": true,
          "trash": true,
          "share": true
        },
        "owner": {
          "id": true,
          "name": true
        },
        "createdBy": {
          "kind": true,
          "label": true
        },
        "childCount": true,
        "shareCount": true,
        "currentVersion": {
          "id": true,
          "versionNumber": true
        },
        "path": {
          "id": true,
          "name": true
        },
        "updatedAt": true,
        "trashedAt": true
      }
    }
  }
}
```
