<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listPipelineItemCustomFields

query · domain `pipelineItems` · requires the READ scope

List a pipeline's custom-field DEFINITIONS (by pipelineId from listPipelines): id, name, type (TEXT/NUMBER/DOLLAR/DATE/LINK/DROPDOWN), dropdown options, allowMultiple, defaultValue. Pipeline item custom fields are per-pipeline. DEFINITIONS ONLY — no pipeline item's recorded value appears here: read those from getPipelineItem's `customFieldValues`, which lists only the fields a given pipeline item has been given a value for. Use each id as the customFieldId in the pipeline item's customFieldValues input on createPipelineItem / updatePipelineItem to write values.

## Call

```ts
const result = await client.pipelineItems.listPipelineItemCustomFields({ pipelineId: '<id>' })
// → Promise<ListPipelineItemCustomFieldsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListPipelineItemCustomFieldsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
  "pipelineItemCustomFieldQuery": {
    "getPipelineCustomFields": {
      "id": true,
      "name": true,
      "type": true,
      "options": {
        "id": true,
        "label": true
      },
      "displayOrder": true,
      "allowMultiple": true,
      "defaultValue": true
    }
  }
}
```
