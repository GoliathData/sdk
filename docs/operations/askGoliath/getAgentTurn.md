<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getAgentTurn

query · domain `askGoliath` · requires the WRITE scope

One message sent to Ask Goliath (`conversationId`, `turnId`): `status` RUNNING, WAITING_FOR_CALLER (answer `questions` with answerAgentQuestions), COMPLETED (a card only Goliath answers is `inAppCard`), FAILED (`error`) or CANCELLED, and the `reply` so far. `waitSeconds` (0-25) holds until the reply finishes. Ask Goliath acts as the key owner, as in the app. Needs a WRITE key.

## Call

```ts
const result = await client.askGoliath.getAgentTurn({ conversationId: '<id>', turnId: '<id>' })
// → Promise<GetAgentTurnQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetAgentTurnQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `conversationId` | `ID!` | yes | — |
| `turnId` | `ID!` | yes | — |
| `waitSeconds` | `Int` | no | 0 |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "externalAgentChatQuery": {
    "agentTurn": {
      "conversationId": true,
      "turnId": true,
      "runId": true,
      "status": true,
      "reply": true,
      "questions": {
        "id": true,
        "prompt": true,
        "kind": true,
        "options": true,
        "multi": true,
        "allowOther": true,
        "approval": true,
        "tone": true,
        "confirmLabel": true,
        "draft": {
          "channel": true,
          "contactId": true,
          "toName": true,
          "toAddress": true,
          "from": true,
          "reply": true,
          "subject": true,
          "body": true,
          "cc": true
        }
      },
      "inAppCard": {
        "title": true,
        "url": true
      },
      "error": true
    }
  }
}
```
