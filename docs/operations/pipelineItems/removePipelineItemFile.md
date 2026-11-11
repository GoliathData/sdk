<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# removePipelineItemFile

mutation · domain `pipelineItems` · requires the WRITE scope

Detach one file from a pipeline item by fileId (fileIds come from listPipelineItemFiles). This removes the link only — the underlying stored file/bytes are not deleted. Removing a file that is not on the pipeline item, or already removed, is a no-op. Returns the pipeline item id. The pipeline item must be in a pipeline owned by or shared with your organization.

## Call

```ts
const result = await client.pipelineItems.removePipelineItemFile({ pipelineItemId: '<id>', fileId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RemovePipelineItemFileMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RemovePipelineItemFileMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineItemId` | `ID!` | yes | — |
| `fileId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemMutation": {
    "removePipelineItemFiles": {
      "id": true
    }
  }
}
```
