<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getDeal

query · domain `deals` · requires the READ scope

Fetch one deal by id — title, value, close date, stage, pipeline, COMMISSION AND TEAM SPLIT, CUSTOM-FIELD VALUES, assigned users (empty = unassigned), and linked contacts (id + name). It does NOT return who is on those contacts: this op also reaches deals on pipelines another org SHARED with yours, whose contacts belong to that org, and the participant read is scoped to your own org — it would come back empty for them and read as "nobody is on this contact" when someone is. To see who is on a contact, call getContact with that contactId: it is guarded to your org, so a contact you cannot see fails loudly instead of answering empty. To audit ownership across a whole pipeline, page findDeals for the unassigned deals, then resolve each linked contact with getContact — findDeals does not carry participants either, for the same reason. MONEY — commission, team split and participant splits are now READABLE here, and they are the answer to GCI questions. `commissionCents` is the DERIVED total commission on the deal: quote THAT as the deal’s GCI. The other four are the stored write SOURCES, and each side is amount-XOR-percent, so exactly one of a pair is ever non-null: `commissionAmountCents` (a fixed dollar figure, in cents) or `commissionPercentBps` (basis points — 300 bps = 3%, applied to priceCents); and `teamSplitAmountCents` or `teamSplitPercentBps` (basis points applied to the COMMISSION, not the price). So when commissionPercentBps is set, commissionCents is priceCents x bps/10000 and changing the price silently changes the commission; when commissionAmountCents is set, commissionCents equals it and the price is irrelevant. All four sources null with commissionCents null means no commission has been recorded — NOT zero commission; do not report $0 for a deal nobody has filled in. `participantSplits` is the per-teammate allocation of what is left after the team fee (each row: user, splitAmountCents or splitPercentBps). Write all of these through updateDeal / createDeal, which echo them back. CUSTOM FIELDS — `customFieldValues` is the read-back for the customFieldValues input on createDeal / updateDeal (INT-907; there was no read path before). It carries ONLY the fields this deal actually has a value for: a defined field the deal has never been given a value for is ABSENT from the list, not present-and-null, which is the opposite of a contact’s customFields. So an empty list means nothing is filled in, never that the pipeline has no fields — get the pipeline’s full definition set from listDealCustomFields(pipelineId). Each entry names its definition under `dealCustomField` (id, name, type) and carries the value in the ONE sub-field matching that type: TEXT/LINK -> textValue, NUMBER/DOLLAR -> numberValue (a plain number, NOT cents), DATE -> dateValue (ISO 8601), DROPDOWN -> dropdownSelectedValues (the option LABEL strings, not option ids; more than one only when the definition’s allowMultiple is true).

## Call

```ts
const result = await client.deals.getDeal({ dealId: '<id>' })
// → Promise<GetDealQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetDealQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `dealId` | `ID!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealQuery": {
    "getDeal": {
      "id": true,
      "title": true,
      "description": true,
      "priceCents": true,
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
      "participantSplits": {
        "user": {
          "id": true,
          "firstName": true,
          "lastName": true
        },
        "splitAmountCents": true,
        "splitPercentBps": true
      },
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
        "id": true,
        "textValue": true,
        "dateValue": true,
        "numberValue": true,
        "dropdownSelectedValues": true,
        "dealCustomField": {
          "id": true,
          "name": true,
          "type": true
        }
      }
    }
  }
}
```
