<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteSpaceItemsForever

mutation · domain `spaces` · requires the WRITE scope

PERMANENTLY delete items that are already in the trash — rows, every version and the stored bytes. Cannot be undone. Items not in the trash are refused (trash them first). Requires the user's explicit approval.

## Call

```ts
const result = await client.spaces.deleteSpaceItemsForever({ itemIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteSpaceItemsForeverMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteSpaceItemsForeverMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "deleteForever": true
  }
}
```
