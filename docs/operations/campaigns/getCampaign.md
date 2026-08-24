<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getCampaign

query · domain `campaigns` · requires the READ scope

Fetch one campaign by id (from listCampaigns) — the listCampaigns row shape plus reply-sentiment segments.

## Call

```ts
const result = await client.campaigns.getCampaign({ campaignId: '<id>' })
// → Promise<GetCampaignQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetCampaignQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `campaignId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "campaigns": {
    "campaign": {
      "id": true,
      "name": true,
      "channel": true,
      "status": true,
      "statusLabel": true,
      "meta": true,
      "ownerName": true,
      "lastActivityLabel": true,
      "engagedLabel": true,
      "funnel": {
        "label": true,
        "value": true
      },
      "sentimentSegments": {
        "sentiment": true,
        "flexGrow": true
      }
    }
  }
}
```
