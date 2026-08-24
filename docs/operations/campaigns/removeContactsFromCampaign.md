<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# removeContactsFromCampaign

mutation · domain `campaigns` · requires the WRITE scope

Take contacts off a campaign's recipient roster (campaignId + contactIds) — the reverse of enrollContactsInCampaign. Deletes their membership and STOPS any in-flight run they have in the campaign's sequence, so no further step is sent to them. Returns removedCount, which counts only ids that were actually enrolled in THIS campaign: passing ids that are not members is not an error and simply does not count toward it, so compare removedCount against what you asked for before reporting success. Removal frees each contact's one live-campaign slot on that channel, which is how you move someone from one campaign to another — remove, then enroll. It does not archive, delete or opt out the contact, does not change their consent record, and does not retract messages already delivered. Available whatever the campaign's status, including while it is live — stopping sending is never refused here, unlike enrolling into a live campaign.

## Call

```ts
const result = await client.campaigns.removeContactsFromCampaign({ campaignId: '<id>', contactIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RemoveContactsFromCampaignMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RemoveContactsFromCampaignMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `campaignId` | `ID!` | yes | — |
| `contactIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "campaignsMutation": {
    "removeContactsFromCampaign": {
      "removedCount": true
    }
  }
}
```
