<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getContactCampaignEnrollments

query · domain `campaigns` · requires the READ scope

The campaigns ONE contact is currently enrolled in (by contactId) — per enrollment: id, campaignId, campaignName, channel, status (DRAFT | ACTIVE | PAUSED) and enrolledAt. This is the contact-side answer to 'is this person in a campaign?'; at most one entry per channel, because a contact holds a single live-campaign slot per channel. An empty list means the contact is in no campaign at this moment: memberships are released when they are removed and when a campaign is ended, so past participation does not show up here — read the contact's activity timeline for that. To answer the question for a whole roster instead of one person, page a campaign with listCampaignContacts. Unlike the rest of the campaigns operations this one reads the contact namespace.

## Call

```ts
const result = await client.campaigns.getContactCampaignEnrollments({ contactId: '<id>' })
// → Promise<GetContactCampaignEnrollmentsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetContactCampaignEnrollmentsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "contact": {
      "id": true,
      "name": true,
      "campaignEnrollments": {
        "id": true,
        "campaignId": true,
        "campaignName": true,
        "channel": true,
        "status": true,
        "enrolledAt": true
      }
    }
  }
}
```
