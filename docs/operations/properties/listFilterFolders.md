<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listFilterFolders

query · domain `properties` · requires the READ scope

Saved-filter folders of one `type` (PROPERTY, CONTACT, DEAL), empty ones included: the org's shared ones plus your private ones. A filter's `folderId` is one of these; file filters with updateFilter `folderId`.

## Call

```ts
const result = await client.properties.listFilterFolders({ type: <FilterType> })
// → Promise<ListFilterFoldersQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListFilterFoldersQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `type` | `FilterType!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "filterQuery": {
    "getFilterFolders": {
      "folders": {
        "id": true,
        "name": true,
        "isPrivate": true,
        "parentId": true,
        "displayOrder": true
      }
    }
  }
}
```
