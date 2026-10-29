<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# renameFilterFolder

mutation · domain `properties` · requires the WRITE scope

Rename a filter folder (listFilterFolders id); onto a sibling’s name it MERGES into it.

## Call

```ts
const result = await client.properties.renameFilterFolder({ type: <FilterType>, folderId: '<id>', name: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RenameFilterFolderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RenameFilterFolderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `type` | `FilterType!` | yes | — |
| `folderId` | `ID!` | yes | — |
| `name` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "filterMutation": {
    "renameFilterFolderById": true
  }
}
```
