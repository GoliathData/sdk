<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateCampaign

mutation · domain `campaigns` · requires the WRITE scope

Edit a DRAFT campaign by id (read the current values with getCampaignEditor first — sequence is a FULL replacement) — rename, replace the message sequence (each step: kind, body [spintax for TEXT], delayDays; RVM steps and their voiceId are reserved but NOT yet operational — voiceId is accepted and ignored server-side), or set the quiet-hours sendWindow (startHour/startMinute/endHour/endMinute in the campaign's fixed sending timezone). Sequence and send window are only editable while the campaign is a draft; channel and purpose are immutable.

## Call

```ts
const result = await client.campaigns.updateCampaign({ campaignId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateCampaignMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateCampaignMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `campaignId` | `ID!` | yes | — |
| `name` | `String` | no | — |
| `sequence` | `[CampaignSequenceStepInput!]` | no | — |
| `sendWindow` | `CampaignSendWindowInput` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "campaignsMutation": {
    "updateCampaign": {
      "id": true,
      "name": true,
      "channel": true,
      "status": true,
      "statusLabel": true,
      "meta": true
    }
  }
}
```
