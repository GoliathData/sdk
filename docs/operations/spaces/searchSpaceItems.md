<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# searchSpaceItems

query · domain `spaces` · requires the READ scope

Find folders and files by NAME (case-insensitive substring) across everything you can see — at most 50, most recently changed first. Searches names only, not file contents.

## Call

```ts
const result = await client.spaces.searchSpaceItems({ query: '<text>' })
// → Promise<SearchSpaceItemsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SearchSpaceItemsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `query` | `String!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesQuery": {
    "search": {
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
```
