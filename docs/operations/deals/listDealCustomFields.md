<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listDealCustomFields

query · domain `deals` · requires the READ scope

List a deal pipeline's custom-field DEFINITIONS (by pipelineId from listPipelines): id, name, type (TEXT/NUMBER/DOLLAR/DATE/LINK/DROPDOWN), dropdown options, allowMultiple, defaultValue. Deal custom fields are per-pipeline. DEFINITIONS ONLY — no deal's recorded value appears here: read those from getDeal's `customFieldValues`, which lists only the fields a given deal has been given a value for. Use each id as the customFieldId in the deal's customFieldValues input on createDeal / updateDeal to write values.

## Call

```ts
const result = await client.deals.listDealCustomFields({ pipelineId: '<id>' })
// → Promise<ListDealCustomFieldsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListDealCustomFieldsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
  "dealCustomFieldQuery": {
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
