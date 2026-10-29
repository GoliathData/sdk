<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listSpaceItemVersions

query · domain `spaces` · requires the READ scope

A file's saved versions, newest first — at most the newest 200: number, size, who saved it, and which is current. Read an older one with getSpaceTextContent(versionId); bring it back with restoreSpaceItemVersion.

## Call

```ts
const result = await client.spaces.listSpaceItemVersions({ itemId: '<id>' })
// → Promise<ListSpaceItemVersionsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListSpaceItemVersionsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `itemId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesQuery": {
    "versions": {
      "id": true,
      "versionNumber": true,
      "sizeBytes": true,
      "contentType": true,
      "createdAt": true,
      "createdBy": {
        "kind": true,
        "label": true
      },
      "isCurrent": true
    }
  }
}
```
