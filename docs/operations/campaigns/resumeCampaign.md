<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# resumeCampaign

mutation · domain `campaigns` · requires the WRITE scope

UNAVAILABLE: this operation is refused with a 403 sends_unavailable error. Resuming restarts outbound texting to the campaign’s audience — the same bulk send launching performs — and bulk sending is not offered through the API; see launchCampaign for why and for what to do instead. The operation stays listed so SDKs keep compiling. Resume a PAUSED campaign by id. pauseCampaign and endCampaign are NOT refused: stopping sending is always available here.

## Call

```ts
const result = await client.campaigns.resumeCampaign({ campaignId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ResumeCampaignMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ResumeCampaignMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `campaignId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "campaignsMutation": {
    "resumeCampaign": {
      "id": true,
      "name": true,
      "status": true,
      "statusLabel": true
    }
  }
}
```
