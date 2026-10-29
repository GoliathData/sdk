<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# reorderFolderItems

mutation · domain `properties` · requires the WRITE scope

Set the display order of items inside one folder: `orderedItems` (`{ kind, id }`) first to last. TEMPLATE and FORM items are refused (they have no order). Returns how many were ordered.

## Call

```ts
const result = await client.properties.reorderFolderItems({ orderedItems: [<FolderItemRef>] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ReorderFolderItemsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ReorderFolderItemsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `orderedItems` | `[FolderItemRef!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "folderMutation": {
    "reorderItems": true
  }
}
```
