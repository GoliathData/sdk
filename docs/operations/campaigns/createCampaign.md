<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createCampaign

mutation · domain `campaigns` · requires the WRITE scope

Create a campaign as a DRAFT. Requires name and channel (TEXT | EMAIL | PHONE | MAIL); optionally set the sending purpose (messageProvisionCampaignId — must be a sending purpose your org owns). Channel and purpose are immutable after creation. The message sequence is seeded server-side from the purpose — edit it with updateCampaign.

## Call

```ts
const result = await client.campaigns.createCampaign({ name: '<text>', channel: <CampaignChannel> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateCampaignMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateCampaignMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `name` | `String!` | yes | — |
| `channel` | `CampaignChannel!` | yes | — |
| `messageProvisionCampaignId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "campaignsMutation": {
    "createCampaign": {
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
