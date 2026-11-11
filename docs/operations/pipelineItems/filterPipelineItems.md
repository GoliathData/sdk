<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# filterPipelineItems

query · domain `pipelineItems` · requires the READ scope

Run a SAVED pipeline item filter (`filterId` from listPipelineItemFilters or saveFilter type DEAL) over ONE pipeline (`pipelineId` from listPipelineNames) and page the matching pipeline items with limit/offset: id, title, isArchived, stage and assignees, plus pagination.total (every match, not the page) and hasMore. Saved filters only: to try criteria first, save the filter, run it here, and fix it in place with updateFilter. A pipeline item filter does not carry its pipeline, so the same filter can run over any pipeline you pass. Use getPipelineItem for one pipeline item in full.

## Call

```ts
const result = await client.pipelineItems.filterPipelineItems({ filterId: '<id>', pipelineId: '<id>' })
// → Promise<FilterPipelineItemsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `FilterPipelineItemsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `filterId` | `ID!` | yes | — |
| `pipelineId` | `ID!` | yes | — |
| `limit` | `Int` | no | 25 |
| `offset` | `Int` | no | 0 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "filterQuery": {
    "applyPipelineItemFilter": {
      "items": {
        "id": true,
        "title": true,
        "isArchived": true,
        "stage": {
          "id": true,
          "name": true
        },
        "users": {
          "id": true,
          "firstName": true,
          "lastName": true
        }
      },
      "pagination": {
        "total": true,
        "hasMore": true
      }
    }
  }
}
```
