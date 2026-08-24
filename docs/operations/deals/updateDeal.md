<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateDeal

mutation · domain `deals` · requires the WRITE scope

Update a deal by id — title, price, close date, and stage. THIS IS THE STAGE-MOVE OPERATION: send input { stageId } alone (stage ids come from listPipelineStages) to move a deal between stages; every other field left out is untouched, and the move stamps lastStageChangeAt. A stage change is POTENTIALLY OUTBOUND, by TWO independent paths: (1) entering the stage wakes any DEAL workflow automation triggered on that stage, and (2) the update also fires a deal-updated event for EVERY contact attached to the deal, and a CONTACT workflow can match on the destination stage/pipeline — so a contact automation can send even when the pipeline itself has no DEAL workflow on that stage. Either path can text or email a real person. DEFAULT TO CONFIRMING: if the deal has ANY attached contacts, ask the user before moving (ASK_USER_QUESTIONS), naming the risk plainly — e.g. "Moving this to Under Contract may trigger an automated text to the seller. Go ahead?". You CANNOT cheaply prove the move is silent: path (2) lives on contact workflows across the whole org, not on the pipeline, so checking the pipeline's DEAL workflows does NOT establish that nothing will send. Do not treat a clean pipeline check as a licence to skip the ask, and do NOT reason "the move is reversible so I can just do it" — undoing the move does not recall a message that already went out, so reversibility never downgrades an outbound side effect. The one narrow case you can move without asking: a deal with NO attached contacts (path 2 cannot fire — no contact events are published) AND no DEAL workflow triggered on the destination stage (checkable via listWorkflows -> getWorkflow -> getWorkflowVersionGraph, whose `triggers` array names the stage that starts a run). That is ordinary reversible work — just make it and report it. The deal (and destination stage, if moving) must be in a pipeline owned by or shared with your organization, and any linked contactIds/userIds must belong to your organization. NOTE: contactIds, propertyIds, and userIds REPLACE the full linked set (not additive) — send every id you want to keep. Pass expectedUpdatedAt (the updatedAt returned by getDeal, findDeals or a previous write) to make the write conditional: the core deal write applies only if the deal has not changed since, otherwise nothing is written and you get CONFLICT. Use it whenever you decided what to write from a copy you read earlier, so a concurrent edit fails loudly instead of being silently overwritten. The token is single-use — a successful write advances updatedAt past the value it consumed, so re-read before guarding again. It does NOT cover userIds, participantSplits or customFieldValues, which are written after the guarded transaction commits. A deleted deal returns NOT_FOUND (do not retry); an unparseable token returns BAD_USER_INPUT. MONEY AND CUSTOM FIELDS, which the input accepts and no description named until now (the whole input is one variable, so the discovery docs cannot expand it). Commission takes ONE source per side, never both: `commissionAmountCents` (a fixed dollar figure in cents) XOR `commissionPercentBps` (basis points — 300 = 3% — applied to priceCents); and `teamSplitAmountCents` XOR `teamSplitPercentBps` (basis points applied to the resulting COMMISSION, not the price). Sending both halves of a pair with values is rejected; sending one explicitly as null CLEARS that side. Whichever you send, the server derives `commissionCents` (the deal’s GCI) and returns it in the response — read it there rather than computing it yourself, and note the percent form is live: a later priceCents change re-derives the commission, while an amount does not. `participantSplits` is [{ userId, splitAmountCents | splitPercentBps }] allocating what remains after the team fee, and it must not exceed the pool. `customFieldValues` is [{ customFieldId (from listDealCustomFields — deal fields are PER-PIPELINE), and exactly ONE of textValue (TEXT/LINK) | numberValue (NUMBER/DOLLAR, a plain number, NOT cents) | dateValue (DATE, ISO 8601) | dropdownSelectedValues (DROPDOWN — the option LABEL strings, not option ids) matching the field’s type }]. The response echoes the money fields and customFieldValues, so confirm the write from it instead of reporting an unverified success.

## Call

```ts
const result = await client.deals.updateDeal({ dealId: '<id>', input: <DealMutationInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateDealMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateDealMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `dealId` | `ID!` | yes | — |
| `input` | `DealMutationInput!` | yes | — |
| `expectedUpdatedAt` | `DateTime` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "updateDeal": {
      "id": true,
      "title": true,
      "priceCents": true,
      "closeDate": true,
      "isArchived": true,
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
