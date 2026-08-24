<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deletePipeline

mutation · domain `deals` · requires the WRITE scope

Delete a deal pipeline (owner-only). Pass a dependencyResolution built from getDeletionImpact: its impactVersion, plus a replacement for every deal the pipeline still holds (empty replacements if getDeletionImpact reports none). Deals are moved to the replacement pipeline/stage you choose, then the pipeline is removed.

## Call

```ts
const result = await client.deals.deletePipeline({ pipelineId: '<id>', dependencyResolution: <DependencyResolutionInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeletePipelineMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeletePipelineMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineId` | `ID!` | yes | — |
| `dependencyResolution` | `DependencyResolutionInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "deleteDealPipeline": {
      "id": true
    }
  }
}
```
