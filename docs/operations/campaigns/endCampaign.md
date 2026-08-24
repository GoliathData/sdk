<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# endCampaign

mutation · domain `campaigns` · requires the WRITE scope

End a campaign by id — terminal; an ended campaign cannot be resumed.

## Call

```ts
const result = await client.campaigns.endCampaign({ campaignId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<EndCampaignMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `EndCampaignMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "endCampaign": {
      "id": true,
      "name": true,
      "status": true,
      "statusLabel": true
    }
  }
}
```
