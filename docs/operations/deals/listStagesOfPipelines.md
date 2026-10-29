<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listStagesOfPipelines

query · domain `deals` · requires the READ scope

Every owned and shared pipeline and its stages, in order; a large organization's answer is cut short. A stage by name is SEARCH_CONTEXT DEAL_STAGE (every pipeline; a miss is final), and every deal in it, in your own pipelines, findDeals `stageName`. Names repeat: move a deal only within its own pipeline.

## Call

```ts
const result = await client.deals.listStagesOfPipelines()
// → Promise<ListStagesOfPipelinesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListStagesOfPipelinesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "currentUser": {
    "myPipelines": {
      "id": true,
      "name": true,
      "stages": {
        "id": true,
        "name": true,
        "isTerminal": true
      }
    },
    "sharedPipelines": {
      "id": true,
      "name": true,
      "sharedByOrganizationName": true,
      "stages": {
        "id": true,
        "name": true,
        "isTerminal": true
      }
    }
  }
}
```
