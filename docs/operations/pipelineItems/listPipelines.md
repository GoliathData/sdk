<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listPipelines

query · domain `pipelineItems` · requires the READ scope

List the organization's pipelines with per-stage pipeline item counts and values. Counts cover only pipeline items you can see. `total` and stage `value` are WHOLE DOLLARS, not cents (1355000 is $1,355,000). Archived pipeline items are excluded; a date window or a won total is findPipelineItems `totals`. `pipelineItems`/`total` include won/lost stages; open is `outcome` open. `sameNameCount` is how many pipelines share the row's name: quote it, never count rows. Use the returned pipeline id with findPipelineItems (its pipelineId filter) to list a pipeline's pipeline items.

## Call

```ts
const result = await client.pipelineItems.listPipelines()
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
      "sameNameCount": true,
      "total": true,
      "pipelineItems": true,
      "stages": {
        "name": true,
        "outcome": true,
        "count": true,
        "value": true
      }
    }
  }
}
```
