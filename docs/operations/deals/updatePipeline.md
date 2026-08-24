<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updatePipeline

mutation · domain `deals` · requires the WRITE scope

Update a deal pipeline's title and/or description (by pipelineId from listPipelines). Owner-only: the pipeline must be OWNED by your organization — a pipeline merely shared with you cannot be edited.

## Call

```ts
const result = await client.deals.updatePipeline({ pipelineId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdatePipelineMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdatePipelineMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineId` | `ID!` | yes | — |
| `title` | `String` | no | — |
| `description` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "updateDealPipeline": {
      "id": true,
      "name": true,
      "description": true,
      "dealsCount": true
    }
  }
}
```
