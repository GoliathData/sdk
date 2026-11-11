<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listPipelineStages

query · domain `pipelineItems` · requires the READ scope

One pipeline's stages, in order (all pipelines: listStagesOfPipelines).

## Call

```ts
const result = await client.pipelineItems.listPipelineStages({ pipelineId: '<id>' })
// → Promise<ListPipelineStagesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListPipelineStagesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineId` | `ID!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemQuery": {
    "getPipelineStages": {
      "id": true,
      "name": true,
      "order": true,
      "isTerminal": true,
      "terminalType": true,
      "winProbability": true
    }
  }
}
```
