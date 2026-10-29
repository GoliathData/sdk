<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# renameSpaceItem

mutation · domain `spaces` · requires the WRITE scope

Rename a folder or file you can edit. Refused when something in the same folder already has that name. Renaming a file can change its type (its extension).

## Call

```ts
const result = await client.spaces.renameSpaceItem({ itemId: '<id>', name: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RenameSpaceItemMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RenameSpaceItemMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `itemId` | `ID!` | yes | — |
| `name` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "rename": {
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
