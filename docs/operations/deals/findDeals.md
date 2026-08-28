<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# findDeals

query · domain `deals` · requires the READ scope

Search deals org-wide — optional title substring, contact, pipeline, stage, and archived filters. Pass stageId (from listPipelineStages) to read one column directly instead of paging a whole pipeline. IMPORTANT — archived deals are INCLUDED BY DEFAULT: omitting isArchived applies no archive filter at all, so results mix active and archived deals (archived ones merely sort last). Pass isArchived: false for active-only — do that whenever you are answering "what is in my pipeline" — or isArchived: true to find archived deals (e.g. to restore one with archiveDeal). Check each result's isArchived field before reporting a deal as current. Each deal carries its assigned users — an empty array means the deal is UNASSIGNED, nobody owns it — and its linked contacts (id + name). For the ownership-gap audit ("deals nobody owns, whose contact does have someone on it"), pass hasAssignedUsers: false — the filter runs server-side over the WHOLE pipeline, so the returned totalCount IS the number of unowned deals and you can report it without paging everything to prove it (hasAssignedUsers: true is the inverse; omit it to get both). Never answer "how many deals have nobody on them" by counting a page — take the totalCount off a hasAssignedUsers: false query. To answer "what is assigned to a particular person", pass userIds (their userId from listTeammates) — server-side as well, so its totalCount is that person's real workload rather than a page count, and it composes with stageId / isArchived / hasAssignedUsers. It must name at least one user: an empty list is rejected, not silently ignored. The CONTACT half is not: whether anyone is on a contact comes from getContact, one call per contact, because this page does not carry it. Do NOT infer the contact side from anything here, and do not report the audit as complete after only paging deals. One wrinkle to report rather than swallow: a deal on your pipeline can link a contact belonging to a PARTNER org (they can write to a pipeline you shared with them), and getContact will refuse that id — that is "not visible to you", NOT "nobody is on it", so count those separately instead of folding them into either bucket. Org-pinned in the service layer; returns a capped page plus the unpaged total. Each row also carries the deal's commission figures — commissionCents (the derived total, i.e. the GCI) plus the stored sources commissionAmountCents / commissionPercentBps / teamSplitAmountCents / teamSplitPercentBps — so a portfolio money question ("what is our GCI on everything closing this month") is answerable from one page rather than a getDeal per deal. Read them exactly as getDeal documents: amount XOR percent per side, and all-null means no commission RECORDED, not zero. participantSplits is NOT on this page; call getDeal for that. `customFieldValues` IS on this page, so a board-wide survey — who holds which card, which cards have no Difficulty set — is one call rather than a getDeal per card. It is LEANER here than on getDeal: each entry carries the value plus the field NAME (`dealCustomField { name }`) and drops the ids and the type, because this page is for surveying rather than for writing back. Read the value from the ONE sub-field matching the field type exactly as getDeal documents. Same absent-not-null rule too: a field the deal has never been given a value for is missing from the list, so an empty list means nothing is filled in, never that the pipeline has no fields. Custom fields multiply per row, so if a page comes back `truncated`, lower `limit` rather than assuming the missing deals have no values.

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
| `pipelineId` | `ID` | no | — |
| `stageId` | `ID` | no | — |
| `isArchived` | `Boolean` | no | — |
| `hasAssignedUsers` | `Boolean` | no | — |
| `userIds` | `[ID!]` | no | — |
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
        "closeDate": true,
        "isArchived": true,
        "updatedAt": true,
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
      "hasMore": true
    }
  }
}
```
