<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# archivePipelineItem

mutation · domain `pipelineItems` · requires the WRITE scope

Archive or RESTORE one pipeline item by id (isArchived true or false); archivePipelineItems archives many. Reversible: archiving takes the pipeline item off the pipeline BOARD and deletes nothing. findPipelineItems finds archived ones with isArchived: true. Archiving triggers no workflow, so it never sends a message. The pipeline item must be in a pipeline owned by or shared with your organization.

## Call

```ts
const result = await client.pipelineItems.archivePipelineItem({ pipelineItemId: '<id>', isArchived: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ArchivePipelineItemMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ArchivePipelineItemMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineItemId` | `ID!` | yes | — |
| `isArchived` | `Boolean!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemMutation": {
    "changeArchiveStatus": {
      "id": true,
      "title": true,
      "isArchived": true
    }
  }
}
```
