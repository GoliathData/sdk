<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getCampaignFunnel

query · domain `campaigns` · requires the READ scope

Per-campaign delivery-to-reply funnel with stage-to-stage conversion (by campaignId from listCampaigns) — the ordered stages Sent → Delivered → Replied → Interested, each carrying its count (valueLabel), share of the first stage (pctLabel, e.g. '96%'), and a stage-to-stage note (subLabel, e.g. '96% delivered'), plus an intro label and a deliverability summary. Computed from lifetime attributed text-message counts, so the funnel is populated for TEXT campaigns only; EMAIL/PHONE/MAIL campaigns return an empty funnel (each channel gets its own delivery funnel later — MAIL already has a dedicated one in-app).

## Call

```ts
const result = await client.campaigns.getCampaignFunnel({ campaignId: '<id>' })
// → Promise<GetCampaignFunnelQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetCampaignFunnelQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `campaignId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "campaigns": {
    "detail": {
      "funnelIntroLabel": true,
      "deliverabilityLabel": true,
      "funnel": {
        "label": true,
        "hint": true,
        "valueLabel": true,
        "pctLabel": true,
        "subLabel": true
      }
    }
  }
}
```
