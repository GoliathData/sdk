<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listStalledDeals

query · domain `deals` · requires the READ scope

List deals going cold — no activity for a while, ordered by days inactive. Returns each deal with its stage, pipeline, linked contact, and inactiveDays.

## Call

```ts
const result = await client.deals.listStalledDeals()
// → Promise<ListStalledDealsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListStalledDealsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `limit` | `Int` | no | 20 |
| `offset` | `Int` | no | 0 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineSummaryQuery": {
    "stalledDealsPage": {
      "deals": {
        "id": true,
        "name": true,
        "value": true,
        "stage": true,
        "pipelineId": true,
        "contactName": true,
        "contactId": true,
        "inactiveDays": true
      },
      "totalCount": true,
      "hasMore": true
    }
  }
}
```
