<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# answerAgentQuestions

mutation · domain `askGoliath` · requires the WRITE scope

Answer the questions the latest reply ended on (a question or an approval) as the key owner's click would: `answers` maps each question id to a label, a list of labels, free text, or {"other": "text"}. Returns the turn (getAgentTurn). Waits up to `waitSeconds` (0-25, default 25) for the reply; poll getAgentTurn after. `confirmSends`: an approval card for a text or email carries its `draft`; trust decides if it asks.

## Call

```ts
const result = await client.askGoliath.answerAgentQuestions({ conversationId: '<id>', answers: <JSON> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AnswerAgentQuestionsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AnswerAgentQuestionsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `conversationId` | `ID!` | yes | — |
| `answers` | `JSON!` | yes | — |
| `waitSeconds` | `Int` | no | 25 |
| `confirmSends` | `Boolean` | no | false |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "externalAgentChatMutation": {
    "answerAgentQuestions": {
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
