<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# surveyDeals

query · domain `deals` · requires the READ scope

Survey deals — findDeals' search (same visibility), without stageName/outcome/windows/totals, with a deliberately LEAN row: deal id, title, isArchived, stage NAME, pipeline NAME, assigned users by NAME, open-task counts, and custom-field values. Use this whenever the question is about MANY deals rather than about a few in full — "who holds which card", "which cards have no Difficulty set", "what is on this board", any board-wide count or grouping. Use findDeals instead when you need money (commission / team split), linked contacts, close date, price, createdAt/updatedAt, or the ids inside a row; use getDeal for one deal in full. A capped result DROPS WHOLE DEALS silently: when `truncated` is true, lower `limit` and page (`__omittedItems` counts the dropped rows). `totalCount` is the UNPAGED total to quote for "how many". IDS — the row carries names, not ids, for everything except the deal itself: stage ids from listStagesOfPipelines, user ids from listTeammates, custom-field ids and types from listDealCustomFields. The deal `id` IS here — pass it to getDeal or updateDeal to act on a row. ARCHIVED deals are included when isArchived is omitted, as in findDeals; check each row's isArchived. ASSIGNEES — an EMPTY `users` means UNASSIGNED; filter with hasAssignedUsers / userIds as in findDeals. No linked contacts here. CUSTOM FIELDS — each entry carries the value plus the field NAME (no id, no type). Read the value from the ONE slot matching the field type: TEXT/LINK -> textValue, NUMBER/DOLLAR -> numberValue (a plain number, NOT cents), DATE -> dateValue (ISO 8601), DROPDOWN -> dropdownSelectedValues (the option LABEL strings). A field the deal has never been given a value for is ABSENT from the list rather than present-and-null, so an empty list means nothing is filled in on that deal — never that the pipeline has no fields (get the definitions from listDealCustomFields(pipelineId)). TASKS — `taskSummary` counts open tasks and appointments on the DEAL (not its contacts); 0 means none, so "which deals have no task" is this page. In Ask Goliath omitting isArchived reads live deals only; null reads both.

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
| `contactIds` | `[ID!]` | no | — |
| `pipelineId` | `ID` | no | — |
| `stageId` | `ID` | no | — |
| `isArchived` | `Boolean` | no | — |
| `hasAssignedUsers` | `Boolean` | no | — |
| `userIds` | `[ID!]` | no | — |
| `limit` | `Int` | no | 16 |
| `offset` | `Int` | no | 0 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 45.
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
        "taskSummary": {
          "openTaskCount": true,
          "openAppointmentCount": true
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
