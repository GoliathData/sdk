<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createFilterFolder

mutation · domain `properties` · requires the WRITE scope

Create a saved-filter folder (returns id). `scope` is the filters' type (PROPERTY, CONTACT, DEAL); `personal: true` makes it private, else it and filters filed in it are shared; with `parentId` it takes the parent's visibility instead. Reuse a listFilterFolders row only if name, parentId and isPrivate all match.

## Call

```ts
const result = await client.properties.createFilterFolder({ scope: <FolderScope>, name: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateFilterFolderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateFilterFolderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `scope` | `FolderScope!` | yes | — |
| `name` | `String!` | yes | — |
| `parentId` | `ID` | no | — |
| `personal` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "folderMutation": {
    "createFolder": {
      "id": true,
      "name": true,
      "parentId": true,
      "ownerUserId": true
    }
  }
}
```
