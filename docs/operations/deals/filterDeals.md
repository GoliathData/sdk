<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# filterDeals

query · domain `deals` · requires the READ scope

Run a SAVED deal filter (`filterId` from listDealFilters or saveFilter type DEAL) over ONE pipeline (`pipelineId` from listPipelineNames) and page the matching deals with limit/offset: id, title, isArchived, stage and assignees, plus pagination.total (every match, not the page) and hasMore. Saved filters only: to try criteria first, save the filter, run it here, and fix it in place with updateFilter. A deal filter does not carry its pipeline, so the same filter can run over any pipeline you pass. Use getDeal for one deal in full.

## Call

```ts
const result = await client.deals.filterDeals({ filterId: '<id>', pipelineId: '<id>' })
// → Promise<FilterDealsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `FilterDealsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "applyDealFilter": {
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
