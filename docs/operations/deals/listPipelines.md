<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listPipelines

query · domain `deals` · requires the READ scope

List the organization's deal pipelines with per-stage deal counts and values. Use the returned pipeline id with findDeals (its pipelineId filter) to list a pipeline's deals.

## Call

```ts
const result = await client.deals.listPipelines()
// → Promise<ListPipelinesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListPipelinesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineSummaryQuery": {
    "summaries": {
      "id": true,
      "name": true,
      "total": true,
      "deals": true,
      "stages": {
        "name": true,
        "count": true,
        "value": true
      }
    }
  }
}
```
