<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getDealPipelineLayout

query · domain `deals` · requires the READ scope

One pipeline's field layout: each custom field with its display order, showOnCard and cardDisplayOrder (the up-to-5 fields the board card shows), and hiddenDetailFieldKeys (what the deal sheet and create/edit form hide: `native:team|closeDate|dealValue|commission` or `custom:<fieldId>`; null or empty = all shown). Read it before setDealCardFields or setDealDetailHiddenFields, which replace the whole list.

## Call

```ts
const result = await client.deals.getDealPipelineLayout({ pipelineId: '<id>' })
// → Promise<GetDealPipelineLayoutQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetDealPipelineLayoutQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "getDealPipeline": {
      "id": true,
      "name": true,
      "canEditPipeline": true,
      "hiddenDetailFieldKeys": true,
      "customFields": {
        "id": true,
        "name": true,
        "type": true,
        "displayOrder": true,
        "showOnCard": true,
        "cardDisplayOrder": true
      }
    }
  }
}
```
