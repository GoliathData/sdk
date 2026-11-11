<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# archivePipelineItems

mutation · domain `pipelineItems` · requires the WRITE scope

Archive many pipeline items of one pipeline by id (restore with archivePipelineItem); a whole filter is the board's own select-all Archive. Runs as a background task: follow `bulkTaskId` with getBulkTask.

## Call

```ts
const result = await client.pipelineItems.archivePipelineItems({ pipelineId: '<id>', pipelineItemIds: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ArchivePipelineItemsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ArchivePipelineItemsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineId` | `ID!` | yes | — |
| `pipelineItemIds` | `[String!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemMutation": {
    "archivePipelineItems": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
