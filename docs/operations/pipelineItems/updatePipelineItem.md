<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updatePipelineItem

mutation · domain `pipelineItems` · requires the WRITE scope

Update a pipeline item by id: title, price, close date, stage. THIS IS THE STAGE-MOVE OPERATION: send input { stageId } alone (from listPipelineStages); fields left out are untouched, and the move stamps lastStageChangeAt. A stage change is POTENTIALLY OUTBOUND by TWO paths: (1) entering the stage wakes any DEAL workflow triggered on it; (2) it fires a pipeline item-updated event for EVERY attached contact, and a CONTACT workflow anywhere in the org can match the destination stage, so a clean pipeline does NOT prove the move is silent. Either can text or email a real person. Do NOT reason "reversible, so just do it": undoing the move does not recall a message. A move the person asked for by name is their yes; any other move of a pipeline item with contacts needs their yes before it runs (a card counts). The pipeline item, stage and linked contactIds/userIds must belong to your organization (or a pipeline shared with it). contactIds, propertyIds and userIds REPLACE the whole linked set: send every id to keep. Pass expectedUpdatedAt (updatedAt from getPipelineItem, findPipelineItems or a previous write) whenever you decided from an earlier read, so a concurrent edit fails loudly. It makes the write conditional and ALL-OR-NOTHING: a change since gives CONFLICT with nothing written, and a rejected userIds, participantSplits or customFieldValues rolls the whole edit back. The token is single-use: re-read before guarding again. Without it a later custom-field failure cannot undo the committed core write. A deleted pipeline item is NOT_FOUND (do not retry); a bad token is BAD_USER_INPUT. MONEY AND CUSTOM FIELDS (the whole input is one variable, so discovery cannot expand it). One commission source per side: `commissionAmountCents` XOR `commissionPercentBps` (basis points, 300 = 3%, of priceCents), and `teamSplitAmountCents` XOR `teamSplitPercentBps` (of the COMMISSION). Both halves with values is rejected; one sent as null CLEARS that side. The server derives `commissionCents` (GCI) and returns it: read it there. A percent re-derives when priceCents changes; an amount does not. `participantSplits` is [{ userId, splitAmountCents | splitPercentBps }] of what remains after the team fee, within the pool. `customFieldValues` is [{ customFieldId (listPipelineItemCustomFields; fields are PER-PIPELINE), exactly ONE of textValue (TEXT/LINK) | numberValue (NUMBER/DOLLAR, a plain number, NOT cents) | dateValue (DATE, ISO 8601) | dropdownSelectedValues (DROPDOWN option LABELS, not ids) }]. The response echoes the money and custom fields: confirm the write from it.

## Call

```ts
const result = await client.pipelineItems.updatePipelineItem({ pipelineItemId: '<id>', input: <PipelineItemMutationInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdatePipelineItemMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdatePipelineItemMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineItemId` | `ID!` | yes | — |
| `input` | `PipelineItemMutationInput!` | yes | — |
| `expectedUpdatedAt` | `DateTime` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemMutation": {
    "updatePipelineItem": {
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
        "pipelineItemCustomField": {
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
