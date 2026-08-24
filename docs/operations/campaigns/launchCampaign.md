<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# launchCampaign

mutation · domain `campaigns` · requires the WRITE scope

UNAVAILABLE: this operation is refused with a 403 sends_unavailable error. Launching starts outbound texting to the campaign’s ENTIRE enrolled audience, and bulk sending is not offered through the API for the same reason single sends are not — it needs a per-contact consent attestation that only a person in the app can make. The operation stays listed so SDKs keep compiling, and everything below describes the behavior it will have if bulk sending is ever re-opened. Launch a DRAFT campaign by id — starts sending. To get a campaign live today: build and stage it through the API (createCampaign, updateCampaign, enrollContactsInCampaign while it is a draft), then have someone launch it from the campaign in the app.

## Call

```ts
const result = await client.campaigns.launchCampaign({ campaignId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<LaunchCampaignMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `LaunchCampaignMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "launchCampaign": {
      "id": true,
      "name": true,
      "status": true,
      "statusLabel": true
    }
  }
}
```
