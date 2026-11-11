<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getPipelineDetailTabs

query · domain `pipelineItems` · requires the READ scope

One pipeline's pipeline item-sheet tabs: each tab's name and its fields in order (`native:<key>` or `custom:<fieldId>`), with the layout version.

## Call

```ts
const result = await client.pipelineItems.getPipelineDetailTabs({ pipelineId: '<id>' })
// → Promise<GetPipelineDetailTabsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetPipelineDetailTabsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "getPipelineDetailLayout": {
      "version": true,
      "tabs": {
        "id": true,
        "name": true,
        "displayOrder": true,
        "fieldReferences": true
      }
    }
  }
}
```
