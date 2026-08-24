<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listCampaigns

query · domain `campaigns` · requires the READ scope

List the organization's marketing campaigns — id, name, channel (TEXT | EMAIL | PHONE | MAIL), status (DRAFT | ACTIVE | PAUSED), owner, last activity, and per-row funnel stats.

## Call

```ts
const result = await client.campaigns.listCampaigns()
// → Promise<ListCampaignsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListCampaignsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "campaigns": {
    "list": {
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
      }
    }
  }
}
```
