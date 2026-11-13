<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# bulkUpdatePipelineItems

mutation · domain `pipelineItems` · requires the WRITE scope

One updatePipelineItem `input` for many pipeline items (stage, close date, owners, contacts); every id must be a pipeline item your org owns or shares, or the whole call is refused. Each pipeline item runs a full updatePipelineItem, so a stage move wakes workflows: confirm as updatePipelineItem says. Field ids: listPipelineItemCustomFields. Large sets run as a background task (`bulkTaskId`, getBulkTask).

## Call

```ts
const result = await client.pipelineItems.bulkUpdatePipelineItems({ pipelineItemIds: ['<id>'], input: <PipelineItemMutationInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<BulkUpdatePipelineItemsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `BulkUpdatePipelineItemsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineItemIds` | `[ID!]!` | yes | — |
| `input` | `PipelineItemMutationInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemMutation": {
    "bulkUpdatePipelineItems": {
      "mode": true,
      "updatedPipelineItemCount": true,
      "bulkTaskId": true
    }
  }
}
```
