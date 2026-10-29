<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteFilterFolder

mutation · domain `properties` · requires the WRITE scope

Delete a filter folder (listFilterFolders id); its contents move up a level.

## Call

```ts
const result = await client.properties.deleteFilterFolder({ type: <FilterType>, folderId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteFilterFolderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteFilterFolderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `type` | `FilterType!` | yes | — |
| `folderId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "filterMutation": {
    "deleteFilterFolderById": true
  }
}
```
