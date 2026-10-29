<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# reorderFilters

mutation · domain `properties` · requires the WRITE scope

Set the display order of saved filters: `filterIds` first to last (listPropertyFilters / listContactFilters / listDealFilters ids).

## Call

```ts
const result = await client.properties.reorderFilters({ filterIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ReorderFiltersMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ReorderFiltersMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `filterIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "filterMutation": {
    "reorderFilters": {
      "id": true,
      "name": true
    }
  }
}
```
