<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getCampaignEditor

query · domain `campaigns` · requires the READ scope

Fetch one campaign's editable configuration (by campaignId) — the current message sequence (kind, body, delayDays), quiet-hours sendWindow, the read-only purpose name, and the auto-reply agent config (prompt). Read this before updateCampaign (sequence is a full replacement) or updateCampaignTextAgent (wholesale replace).

## Call

```ts
const result = await client.campaigns.getCampaignEditor({ campaignId: '<id>' })
// → Promise<GetCampaignEditorQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetCampaignEditorQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `campaignId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "campaigns": {
    "campaignEditor": {
      "campaignId": true,
      "status": true,
      "statusLabel": true,
      "purposeName": true,
      "sequence": {
        "kind": true,
        "body": true,
        "delayDays": true
      },
      "sendWindow": {
        "startHour": true,
        "startMinute": true,
        "endHour": true,
        "endMinute": true
      },
      "agent": {
        "agentId": true,
        "promptBody": true
      }
    }
  }
}
```
