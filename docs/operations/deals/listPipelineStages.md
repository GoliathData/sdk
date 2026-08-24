<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listPipelineStages

query · domain `deals` · requires the READ scope

List the stages of a deal pipeline (by pipelineId from listPipelines), in order. Use a stage id with createDeal or updateDeal.

## Call

```ts
const result = await client.deals.listPipelineStages({ pipelineId: '<id>' })
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
  "dealQuery": {
    "getDealPipelineStages": {
      "id": true,
      "name": true,
      "order": true,
      "isTerminal": true,
      "winProbability": true
    }
  }
}
```
