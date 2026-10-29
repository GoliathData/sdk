<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# findDeals

query · domain `deals` · requires the READ scope

Search AND TOTAL the deals you can see: `totals` sums EVERY match, not the page (price, average, commission; totalCount is the count), so a total is one call. Filters: title, contact (contactIds: deals of ANY of these contacts in ONE read, matched by each row's linked contacts; page hasMore before calling one dealless, never a findDeals per contact), pipeline, stage (stageId, or stageName in all your own pipelines), outcome OPEN/WON/LOST, stageChangedAfter/Before (last stage move, eg a win; Before exclusive), closeDateAfter/Before, archived, assignees. NUMBERS — quote `totals` as they read; never add, average or count rows yourself. IMPORTANT: archived deals are INCLUDED BY DEFAULT (they sort last). Pass isArchived: false for active-only, always for "what is in my pipeline", or true to find archived ones (to restore with archiveDeal); check each result's isArchived before calling a deal current. Each deal carries its assigned users — an empty array means the deal is UNASSIGNED, nobody owns it — and its linked contacts (id + name). hasAssignedUsers: false gives the unowned deals over every deal you can see (totalCount is the count); userIds (listTeammates, never empty) gives one person's. Whether anyone is on a linked CONTACT comes only from getContact, one call per contact; a partner org's contact it refuses is "not visible to you", not "nobody". Each row carries the commission figures: commissionCents (the derived GCI) and the stored commissionAmountCents / commissionPercentBps / teamSplitAmountCents / teamSplitPercentBps, so a portfolio money question ("our GCI on everything closing this month") is one page. Read them as getDeal documents: amount XOR percent per side; all-null means no commission RECORDED, not zero. participantSplits is NOT here (getDeal). `customFieldValues` IS here, LEANER than on getDeal: the value plus the field NAME (`dealCustomField { name }`), no ids or type, for surveying (who holds which card, which have no Difficulty set) rather than writing back. Read the ONE sub-field matching the type, as getDeal documents. A field never given a value is absent, so an empty list means nothing filled in, never no fields. Custom fields multiply per row: on a `truncated` page lower `limit` rather than assume the missing deals have no values. TASKS — `taskSummary` counts open tasks and appointments on the DEAL (not its contacts); 0 means none, so "which deals have no task" is this page. In Ask Goliath omitting isArchived reads live deals only; null reads both.

## Call

```ts
const result = await client.deals.findDeals()
// → Promise<FindDealsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `FindDealsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
| `stageName` | `String` | no | — |
| `outcome` | `PipelineItemOutcomeFilter` | no | — |
| `stageChangedAfter` | `DateTime` | no | — |
| `stageChangedBefore` | `DateTime` | no | — |
| `closeDateAfter` | `DateTime` | no | — |
| `closeDateBefore` | `DateTime` | no | — |
| `limit` | `Int` | no | 20 |
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
        "priceCents": true,
        "priceFormatted": true,
        "closeDate": true,
        "isArchived": true,
        "createdAt": true,
        "updatedAt": true,
        "lastStageChangeAt": true,
        "commissionCents": true,
        "commissionAmountCents": true,
        "commissionPercentBps": true,
        "teamSplitAmountCents": true,
        "teamSplitPercentBps": true,
        "stage": {
          "id": true,
          "name": true
        },
        "pipeline": {
          "id": true,
          "name": true
        },
        "users": {
          "id": true,
          "firstName": true,
          "lastName": true
        },
        "contacts": {
          "id": true,
          "name": true
        },
        "taskSummary": {
          "openTaskCount": true,
          "openAppointmentCount": true
        },
        "customFieldValues": {
          "textValue": true,
          "dateValue": true,
          "numberValue": true,
          "dropdownSelectedValues": true,
          "dealCustomField": {
            "name": true
          }
        }
      },
      "totalCount": true,
      "hasMore": true,
      "totals": {
        "pricedDealCount": true,
        "priceFormatted": true,
        "averagePriceFormatted": true,
        "commissionDealCount": true,
        "commissionFormatted": true
      }
    }
  }
}
```
