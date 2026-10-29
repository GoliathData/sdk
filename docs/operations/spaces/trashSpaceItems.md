<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# trashSpaceItems

mutation · domain `spaces` · requires the WRITE scope

Move up to 200 items (folders with everything in them) to the trash. Reversible for 30 days with restoreSpaceItems. Returns how many items went.

## Call

```ts
const result = await client.spaces.trashSpaceItems({ itemIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<TrashSpaceItemsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `TrashSpaceItemsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `itemIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "trash": true
  }
}
```
