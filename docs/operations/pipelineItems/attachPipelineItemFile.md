<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# attachPipelineItemFile

mutation · domain `pipelineItems` · requires the WRITE scope

Attach a CHAT file to a pipeline item — the write twin of listPipelineItemFiles. Pass the artifactId of a file your organization already holds: the id the chat assistant sees on its artifact shelf (`(artifactId: …) [origin] filename`). A Library item id is refused: use fileLibraryItemsOnPipelineItem. The server resolves it to the underlying file, org-scoped, links it to pipelineItemId, and returns the file (id, fileName, fileUrl, createdAt); read it back with listPipelineItemFiles. The pipeline item must be in a pipeline owned by or shared with your organization, and the artifact's file must belong to your organization — a foreign artifact is refused, so you cannot link another org's bytes onto a pipeline item you own. There is no raw-bytes upload op yet (the shared upload key is not org-scoped).

## Call

```ts
const result = await client.pipelineItems.attachPipelineItemFile({ pipelineItemId: '<id>', artifactId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AttachPipelineItemFileMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AttachPipelineItemFileMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineItemId` | `ID!` | yes | — |
| `artifactId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemMutation": {
    "attachPipelineItemFileFromArtifact": {
      "id": true,
      "fileName": true,
      "fileUrl": true,
      "createdAt": true
    }
  }
}
```
