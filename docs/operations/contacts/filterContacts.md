<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# filterContacts

query · domain `contacts` · requires the READ scope

Run a contact filter and paginate the matches with limit/offset. Returns a page of contacts (name, tags, phones, emails, `doNotContact`, reason, date, linked `properties`: no getContact per row) plus total and hasMore. Pass EITHER filterId (a saved filter from listContactFilters) OR filterTree (saveFilter's filter-tree DSL; conditions key `fieldId`, not `field`) to run an UNSAVED tree: same path and totals, nothing saved. filterTree verifies a filter before creating it and settles what a condition does (fetch a record with no value for the field and see whether the tree returns it). NEVER save a filter to measure one; save only the one asked for. Sort with sort: { field, direction } (`ASC` / `DESC`); field is a CLOSED vocabulary: `NAME` (A–Z), `SELLER_INTENT_SCORE`, `LAST_COMMUNICATION`, `LAST_ACTIVITY`, `DIAL_ATTEMPTS` (org-wide dials), `MY_LAST_CALL`, `MY_LAST_TEXT`, `LAST_UPDATED`, `CREATED_AT`, `TASK_HIGHLIGHT`, `AUCTION_DATE` (earliest upcoming auction; none sort last). Any other field is silently IGNORED. `participants`: its assignees (REVOKED: no longer assigned).

## Call

```ts
const result = await client.contacts.filterContacts()
// → Promise<FilterContactsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `FilterContactsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `filterId` | `ID` | no | — |
| `filterTree` | `JSON` | no | — |
| `limit` | `Int` | no | 25 |
| `offset` | `Int` | no | 0 |
| `sort` | `Sort` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 100.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "paginateContacts": {
      "items": {
        "id": true,
        "name": true,
        "sellerIntentScore": true,
        "isArchived": true,
        "doNotContact": true,
        "doNotContactReason": true,
        "doNotContactSetAt": true,
        "tags": {
          "id": true,
          "name": true
        },
        "phoneNumbers": {
          "phoneNumber": true,
          "suppressedMediums": true
        },
        "emails": {
          "email": true
        },
        "participants": {
          "status": true,
          "user": {
            "firstName": true,
            "lastName": true
          }
        },
        "properties": {
          "propertyString": true,
          "verificationStatus": true,
          "property": {
            "id": true
          }
        }
      },
      "pagination": {
        "total": true,
        "hasMore": true
      }
    }
  }
}
```
