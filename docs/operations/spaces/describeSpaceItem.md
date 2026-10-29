<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# describeSpaceItem

mutation · domain `spaces` · requires the WRITE scope

Set (or clear, with `description` null) the short description shown under a folder or file you can edit.

## Call

```ts
const result = await client.spaces.describeSpaceItem({ itemId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DescribeSpaceItemMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DescribeSpaceItemMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `itemId` | `ID!` | yes | — |
| `description` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "describe": {
      "id": true,
      "name": true,
      "description": true,
      "updatedAt": true
    }
  }
}
```
