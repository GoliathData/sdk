<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listCampaignContacts

query · domain `campaigns` · requires the READ scope

One page of a campaign's ENROLLED contacts — its recipient roster (by campaignId from listCampaigns). This is the audience a DRAFT campaign will send to once launched, and the audience an ACTIVE campaign is already working through. Returns `total` (the campaign's FULL enrolled count, not the size of this page) and `items`, each a real contact: id, name, isArchived, doNotContact, phone numbers and emails — the id is the contactId every contact operation takes. Page with limit/offset (default 25, max 100). Sort with sortBy NAME | ENROLLED_AT plus sortDirection ASC | DESC; NAME defaults A→Z, ENROLLED_AT defaults newest-first, and omitting sortBy gives newest-first. A campaign with an empty roster returns total 0 — that means nobody has been added yet, not that the roster is unreadable. To ask the reverse question about one person ('is THIS contact in a campaign, and which one?'), use getContactCampaignEnrollments instead of scanning every roster.

## Call

```ts
const result = await client.campaigns.listCampaignContacts({ campaignId: '<id>' })
// → Promise<ListCampaignContactsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListCampaignContactsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `campaignId` | `ID!` | yes | — |
| `limit` | `Int` | no | 25 |
| `offset` | `Int` | no | 0 |
| `sortBy` | `CampaignContactSortField` | no | — |
| `sortDirection` | `SortDirection` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 100.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "campaigns": {
    "campaignContacts": {
      "total": true,
      "items": {
        "id": true,
        "name": true,
        "isArchived": true,
        "doNotContact": true,
        "phoneNumbers": {
          "id": true,
          "phoneNumber": true,
          "phoneType": true
        },
        "emails": {
          "id": true,
          "email": true
        }
      }
    }
  }
}
```
