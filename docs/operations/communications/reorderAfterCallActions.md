<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# reorderAfterCallActions

mutation · domain `communications` · requires the WRITE scope

Order the after-call actions the dialer offers: items list every kind once with its displayOrder. Admins only.

## Call

```ts
const result = await client.communications.reorderAfterCallActions({ items: [<ReorderAfterCallActionItemInput>] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ReorderAfterCallActionsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ReorderAfterCallActionsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `items` | `[ReorderAfterCallActionItemInput!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "callsMutation": {
    "reorderAfterCallActions": {
      "actions": {
        "kind": true,
        "isEnabled": true,
        "displayOrder": true
      }
    }
  }
}
```
