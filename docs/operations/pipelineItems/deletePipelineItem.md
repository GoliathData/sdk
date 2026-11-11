<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deletePipelineItem

mutation · domain `pipelineItems` · requires the WRITE scope

Delete a pipeline item for good; archivePipelineItem hides it instead, so prefer that unless they said delete. Org-owned pipelines only. dependencyResolution from getDeletionImpact(targetKind: DEAL). Returns `stageItWasOn`.

## Call

```ts
const result = await client.pipelineItems.deletePipelineItem({ pipelineItemId: '<id>', dependencyResolution: <DependencyResolutionInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeletePipelineItemMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeletePipelineItemMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineItemId` | `ID!` | yes | — |
| `dependencyResolution` | `DependencyResolutionInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemMutation": {
    "stageItWasOn": {
      "id": true,
      "name": true
    }
  }
}
```
