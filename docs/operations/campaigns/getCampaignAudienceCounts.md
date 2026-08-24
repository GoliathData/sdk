<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getCampaignAudienceCounts

query · domain `campaigns` · requires the READ scope

A campaign's three audience counters (by campaignId) without pulling a contact page — use this to explain an enrollment result rather than re-running it. campaignContactsCount is how many contacts are enrolled right now (the same number listCampaignContacts returns as `total`). campaignSkippedContactsCount is how many DISTINCT contacts were rejected when someone tried to add them and are STILL not enrolled — rejected because a contact may hold only one live campaign per channel and theirs was taken by another campaign. campaignDetachedReplierSkips { count, replierName } is how many were held back because the campaign's reply employee (replierName) had been deliberately detached from them; those are not silently re-attached, and the revive-and-enroll action that clears them is an app-side control that is not exposed through this API — report that rather than retrying enrollContactsInCampaign, which will skip them again.

## Call

```ts
const result = await client.campaigns.getCampaignAudienceCounts({ campaignId: '<id>' })
// → Promise<GetCampaignAudienceCountsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetCampaignAudienceCountsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `campaignId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "campaigns": {
    "campaignContactsCount": true,
    "campaignSkippedContactsCount": true,
    "campaignDetachedReplierSkips": {
      "count": true,
      "replierName": true
    }
  }
}
```
