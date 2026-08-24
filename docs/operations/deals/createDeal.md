<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createDeal

mutation · domain `deals` · requires the WRITE scope

Create a deal in a pipeline stage. Requires title and stageId (from listPipelineStages); optionally set priceCents, closeDate, and link contacts/properties/users by id. The stage must be in a pipeline owned by or shared with your organization, and any linked contactIds/userIds must belong to your organization. MONEY AND CUSTOM FIELDS, which the input accepts and no description named until now (the whole input is one variable, so the discovery docs cannot expand it). Commission takes ONE source per side, never both: `commissionAmountCents` (a fixed dollar figure in cents) XOR `commissionPercentBps` (basis points — 300 = 3% — applied to priceCents); and `teamSplitAmountCents` XOR `teamSplitPercentBps` (basis points applied to the resulting COMMISSION, not the price). Sending both halves of a pair with values is rejected; sending one explicitly as null CLEARS that side. Whichever you send, the server derives `commissionCents` (the deal’s GCI) and returns it in the response — read it there rather than computing it yourself, and note the percent form is live: a later priceCents change re-derives the commission, while an amount does not. `participantSplits` is [{ userId, splitAmountCents | splitPercentBps }] allocating what remains after the team fee, and it must not exceed the pool. `customFieldValues` is [{ customFieldId (from listDealCustomFields — deal fields are PER-PIPELINE), and exactly ONE of textValue (TEXT/LINK) | numberValue (NUMBER/DOLLAR, a plain number, NOT cents) | dateValue (DATE, ISO 8601) | dropdownSelectedValues (DROPDOWN — the option LABEL strings, not option ids) matching the field’s type }]. The response echoes the money fields and customFieldValues, so confirm the write from it instead of reporting an unverified success.

## Call

```ts
const result = await client.deals.createDeal({ input: <CreateDealInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateDealMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateDealMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `CreateDealInput!` | yes | — |

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
