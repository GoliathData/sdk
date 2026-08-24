<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# reorderPipelineStages

mutation · domain `deals` · requires the WRITE scope

Reorder a pipeline's stages (by pipelineId): pass every stage id in the desired order. Owner-only: the pipeline must be OWNED by your organization. Returns the pipeline with its stages in the new order.

## Call

```ts
const result = await client.deals.reorderPipelineStages({ pipelineId: '<id>', stageIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ReorderPipelineStagesMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ReorderPipelineStagesMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineId` | `ID!` | yes | — |
| `stageIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "reorderDealStages": {
      "id": true,
      "name": true,
      "stages": {
        "id": true,
        "name": true,
        "order": true
      }
    }
  }
}
```
