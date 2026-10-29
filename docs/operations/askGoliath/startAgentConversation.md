<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# startAgentConversation

mutation · domain `askGoliath` · requires the WRITE scope

Start a new Ask Goliath chat as the key owner with its first `message`; it shows in their chat list as "via" this key's name. Returns the turn (getAgentTurn). Waits up to `waitSeconds` (0-25, default 25) for the reply; poll getAgentTurn after. `confirmSends`: an approval card for a text or email carries its `draft`; trust decides if it asks.

## Call

```ts
const result = await client.askGoliath.startAgentConversation({ message: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<StartAgentConversationMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `StartAgentConversationMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `message` | `String!` | yes | — |
| `waitSeconds` | `Int` | no | 25 |
| `spoken` | `Boolean` | no | false |
| `confirmSends` | `Boolean` | no | false |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "externalAgentChatMutation": {
    "startAgentConversation": {
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
