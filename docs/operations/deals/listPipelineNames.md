<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listPipelineNames

query · domain `deals` · requires the READ scope

List the organization's own deal pipelines, id and name only, oldest first. `sameNameCount` is how many share the row's name. Use this to find a pipeline id by name. For every pipeline's stages in one call, use listPipelines.

## Call

```ts
const result = await client.deals.listPipelineNames()
// → Promise<ListPipelineNamesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListPipelineNamesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealQuery": {
    "listDealPipelineRefs": {
      "id": true,
      "name": true,
      "sameNameCount": true
    }
  }
}
```
