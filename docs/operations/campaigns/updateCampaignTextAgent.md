<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateCampaignTextAgent

mutation · domain `campaigns` · requires the WRITE scope

Configure a campaign's auto-reply text agent (by campaignId) — the system prompt (promptBody), including free-text escalation and disqualification rules. WHOLESALE REPLACE: the prompt overwrites the current one — read the current value with getCampaignEditor first and send back a full modified copy.

## Call

```ts
const result = await client.campaigns.updateCampaignTextAgent({ campaignId: '<id>', promptBody: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateCampaignTextAgentMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateCampaignTextAgentMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `campaignId` | `ID!` | yes | — |
| `promptBody` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "campaignsMutation": {
    "updateCampaignTextAgent": {
      "agentId": true,
      "promptBody": true
    }
  }
}
```
