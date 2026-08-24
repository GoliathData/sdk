<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getCampaignAnalytics

query · domain `campaigns` · requires the READ scope

Per-campaign analytics (by campaignId from listCampaigns) — engagement-by-day series and the reply-intent breakdown by sentiment.

## Call

```ts
const result = await client.campaigns.getCampaignAnalytics({ campaignId: '<id>' })
// → Promise<GetCampaignAnalyticsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetCampaignAnalyticsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `campaignId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "campaigns": {
    "analytics": {
      "engagementByDay": {
        "label": true,
        "value": true
      },
      "intentBreakdown": {
        "sentiment": true,
        "label": true,
        "valueLabel": true,
        "pct": true
      }
    }
  }
}
```
