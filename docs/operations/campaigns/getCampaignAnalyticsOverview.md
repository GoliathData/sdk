<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getCampaignAnalyticsOverview

query · domain `campaigns` · requires the READ scope

Org-wide campaign analytics for a period (DAYS_7 | DAYS_30 | DAYS_90) — KPI stats with trend deltas, messages-by-day series, reply-intent breakdown by sentiment, and per-brand rollups. campaignCount 0 means the org has no campaigns yet.

## Call

```ts
const result = await client.campaigns.getCampaignAnalyticsOverview({ period: <CampaignAnalyticsPeriod> })
// → Promise<GetCampaignAnalyticsOverviewQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetCampaignAnalyticsOverviewQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `period` | `CampaignAnalyticsPeriod!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "campaigns": {
    "analyticsOverview": {
      "scopeLabel": true,
      "campaignCount": true,
      "replyCount": true,
      "kpis": {
        "label": true,
        "value": true,
        "sublabel": true,
        "deltaLabel": true,
        "deltaUp": true
      },
      "chartTotalLabel": true,
      "messagesByDay": {
        "label": true,
        "value": true
      },
      "intentTotalLabel": true,
      "intentBreakdown": {
        "sentiment": true,
        "label": true,
        "valueLabel": true,
        "pct": true
      },
      "byBrand": {
        "id": true,
        "name": true,
        "score": true,
        "metaLabel": true
      }
    }
  }
}
```
