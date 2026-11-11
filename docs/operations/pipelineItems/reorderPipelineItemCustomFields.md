<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# reorderPipelineItemCustomFields

mutation · domain `pipelineItems` · requires the WRITE scope

Set the display order of one pipeline's custom fields: pass every field id of that pipeline (listPipelineItemCustomFields), first = top. An id from another pipeline is refused. Presentation only: no value, filter or workflow changes. Org admins only.

## Call

```ts
const result = await client.pipelineItems.reorderPipelineItemCustomFields({ pipelineId: '<id>', customFieldIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ReorderPipelineItemCustomFieldsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ReorderPipelineItemCustomFieldsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "reorderCustomFields": {
      "getPipelineCustomFields": {
        "id": true,
        "name": true,
        "displayOrder": true
      }
    }
  }
}
```
