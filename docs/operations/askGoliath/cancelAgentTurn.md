<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# cancelAgentTurn

mutation · domain `askGoliath` · requires the WRITE scope

Stop the reply to one message (`conversationId`, `turnId`); changes it already made stay made.

## Call

```ts
const result = await client.askGoliath.cancelAgentTurn({ conversationId: '<id>', turnId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CancelAgentTurnMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CancelAgentTurnMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `conversationId` | `ID!` | yes | — |
| `turnId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "externalAgentChatMutation": {
    "cancelAgentTurn": {
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
        "allowOther": true
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
