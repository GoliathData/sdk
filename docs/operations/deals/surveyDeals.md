<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# surveyDeals

query · domain `deals` · requires the READ scope

Survey deals org-wide — the SAME search as findDeals (same filters, same org scoping) with a deliberately LEAN row: deal id, title, isArchived, stage NAME, pipeline NAME, assigned users by NAME, and custom-field values. Use this whenever the question is about MANY deals rather than about a few in full — "who holds which card", "which cards have no Difficulty set", "what is on this board", any board-wide count or grouping. Use findDeals instead when you need money (commission / team split), linked contacts, close date, price, createdAt/updatedAt, or the ids inside a row; use getDeal for one deal in full. WHY IT EXISTS: a result handed to an agent is capped at 16,000 characters and the cap DROPS WHOLE DEALS rather than erroring, so a findDeals row — 685 characters before any custom field, 1,313 with four — fits only 23 deals, or 12, under its own default limit of 20. A shortened page looks exactly like a complete one. This row is roughly a third of that, so `limit` defaults to 17 — a page that fits a TYPICAL board carrying four custom fields — and may be raised to 50, which fits when the board has none. Neither number is a guarantee: titles, custom-field names and values, and how many fields and assignees a deal carries are all unbounded, so a heavy board can truncate even at the default. ALWAYS check `truncated` on the response, and when it is true lower `limit` and page rather than reading the survivors as the whole board — the response also carries an `__omittedItems` count saying how many rows were dropped. `totalCount` is the UNPAGED total and is the number to quote for "how many", never the length of a page. IDS — the row carries names, not ids, for everything except the deal itself, because an id costs the same bytes on every row and is one cheap call away: stage ids from listPipelineStages, user ids from listTeammates, custom-field ids and types from listDealCustomFields. The deal `id` IS here — pass it to getDeal or updateDeal to act on a row. ARCHIVED DEALS ARE INCLUDED BY DEFAULT, exactly as in findDeals: omitting isArchived applies no archive filter, so results mix active and archived deals. Pass isArchived: false for active-only, and check each row's isArchived before reporting a deal as current. ASSIGNEES — `users` is the assigned-user list and an EMPTY array means the deal is UNASSIGNED, nobody owns it. For a count of unowned deals pass hasAssignedUsers: false and quote totalCount rather than counting a page; pass userIds (from listTeammates) for one person's workload. It does NOT carry linked contacts, and whether anyone is on a contact still comes from getContact — one call per contact — so an ownership audit is not complete after paging deals alone. CUSTOM FIELDS — each entry carries the value plus the field NAME (no id, no type). Read the value from the ONE slot matching the field type: TEXT/LINK -> textValue, NUMBER/DOLLAR -> numberValue (a plain number, NOT cents), DATE -> dateValue (ISO 8601), DROPDOWN -> dropdownSelectedValues (the option LABEL strings). A field the deal has never been given a value for is ABSENT from the list rather than present-and-null, so an empty list means nothing is filled in on that deal — never that the pipeline has no fields (get the definitions from listDealCustomFields(pipelineId)).

## Call

```ts
const result = await client.deals.surveyDeals()
// → Promise<SurveyDealsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SurveyDealsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `titleContains` | `String` | no | — |
| `contactId` | `ID` | no | — |
| `pipelineId` | `ID` | no | — |
| `stageId` | `ID` | no | — |
| `isArchived` | `Boolean` | no | — |
| `hasAssignedUsers` | `Boolean` | no | — |
| `userIds` | `[ID!]` | no | — |
| `limit` | `Int` | no | 17 |
| `offset` | `Int` | no | 0 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealQuery": {
    "findDeals": {
      "deals": {
        "id": true,
        "title": true,
        "isArchived": true,
        "stage": {
          "name": true
        },
        "pipeline": {
          "name": true
        },
        "users": {
          "firstName": true,
          "lastName": true
        },
        "customFieldValues": {
          "textValue": true,
          "numberValue": true,
          "dateValue": true,
          "dropdownSelectedValues": true,
          "dealCustomField": {
            "name": true
          }
        }
      },
      "totalCount": true,
      "hasMore": true
    }
  }
}
```
