<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setPipelineItemCardFields

mutation · domain `pipelineItems` · requires the WRITE scope

Choose the fields every pipeline item card on one pipeline's board shows: at most 5 field ids of that pipeline, built-ins included, in order. REPLACES the set (empty shows none), for everyone. Org admins only. Returns the fields with showOnCard and cardDisplayOrder.

## Call

```ts
const result = await client.pipelineItems.setPipelineItemCardFields({ pipelineId: '<id>', customFieldIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetPipelineItemCardFieldsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetPipelineItemCardFieldsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineId` | `ID!` | yes | — |
| `customFieldIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemCustomFieldMutation": {
    "updateCardDisplayFields": {
      "id": true,
      "name": true,
      "showOnCard": true,
      "cardDisplayOrder": true
    }
  }
}
```
