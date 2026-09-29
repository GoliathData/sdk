<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getScraperHealthCard

query · domain `deals` · requires the READ scope

Your organization's Scraper Health card for one benchmark key (the same `key` upsertScraperHealthCard opened it with), or null when there is none. Returns id, title, pipelineId, stageId, stageName, updatedAt (pass it back as expectedUpdatedAt on your next move) and sourceKey. Keys are namespaced by organization, so a key only ever names your own card. The card's reasoning history is its activity feed: listDealActivity with eventTypes [SCRAPER_HEALTH_MOVED].

## Call

```ts
const result = await client.deals.getScraperHealthCard({ key: '<text>' })
// → Promise<GetScraperHealthCardQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetScraperHealthCardQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `key` | `String!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealQuery": {
    "getScraperHealthCard": {
      "id": true,
      "title": true,
      "pipelineId": true,
      "stageId": true,
      "stageName": true,
      "updatedAt": true,
      "sourceKey": true
    }
  }
}
```
