<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# bulkUpdateDeals

mutation · domain `deals` · requires the WRITE scope

One updateDeal `input` for many deals (stage, close date, owners, contacts); every id must be a deal your org owns or shares, or the whole call is refused. Each deal runs a full updateDeal, so a stage move wakes workflows: confirm as updateDeal says. Large sets run as a background task (`bulkTaskId`, getBulkTask).

## Call

```ts
const result = await client.deals.bulkUpdateDeals({ dealIds: ['<id>'], input: <PipelineItemMutationInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<BulkUpdateDealsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `BulkUpdateDealsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `dealIds` | `[ID!]!` | yes | — |
| `input` | `PipelineItemMutationInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "bulkUpdateDeals": {
      "mode": true,
      "updatedDealCount": true,
      "bulkTaskId": true
    }
  }
}
```
