<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createDeal

mutation · domain `deals` · requires the WRITE scope

Create a deal in a pipeline stage. Requires title and stageId (listPipelineStages); optional priceCents, closeDate, contact/property/user ids. Entering the stage can text or email a real person, as an updateDeal move can: confirm as updateDeal says. The stage must be in a pipeline owned by or shared with your organization, and any linked contactIds/userIds must belong to your organization. userIds is the deal’s TEAM, and My deals shows only deals the viewer is on. The app’s Create Deal form puts its creator on the team, so when acting for a person include the key owner (getMyProfile) unless they name a different team. MONEY AND CUSTOM FIELDS (the whole input is one variable, so discovery cannot expand it). Commission takes ONE source per side, never both: `commissionAmountCents` (a fixed dollar figure in cents) XOR `commissionPercentBps` (basis points — 300 = 3% — applied to priceCents); and `teamSplitAmountCents` XOR `teamSplitPercentBps` (basis points applied to the resulting COMMISSION, not the price). Sending both halves of a pair with values is rejected; sending one explicitly as null CLEARS that side. The server derives `commissionCents` (GCI) and returns it: read it there. A percent re-derives when priceCents changes; an amount does not. `participantSplits` is [{ userId, splitAmountCents | splitPercentBps }] allocating what remains after the team fee, and it must not exceed the pool. `customFieldValues` is [{ customFieldId (from listDealCustomFields — deal fields are PER-PIPELINE), and exactly ONE of textValue (TEXT/LINK) | numberValue (NUMBER/DOLLAR, a plain number, NOT cents) | dateValue (DATE, ISO 8601) | dropdownSelectedValues (DROPDOWN — the option LABEL strings, not option ids) matching the field’s type }]. The response echoes the money and custom fields: confirm the write from it.

## Call

```ts
const result = await client.deals.createDeal({ input: <CreatePipelineItemInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateDealMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateDealMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `CreatePipelineItemInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "createDeal": {
      "id": true,
      "title": true,
      "priceCents": true,
      "closeDate": true,
      "isArchived": true,
      "updatedAt": true,
      "createdAt": true,
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
      },
      "stage": {
        "id": true,
        "name": true
      },
      "pipeline": {
        "id": true,
        "name": true
      },
      "contacts": {
        "id": true,
        "name": true
      },
      "properties": {
        "id": true,
        "address": {
          "addressFull": true
        }
      }
    }
  }
}
```
