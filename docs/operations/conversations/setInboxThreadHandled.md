<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setInboxThreadHandled

mutation · domain `conversations` · requires the WRITE scope

Mark a TEXT thread HANDLED, the inbox's "no reply needed": it leaves Needs reply (channel NEEDS_RESPONSE) for everyone in the organization until the contact texts again. textConversationId is a MESSAGE row's id; handledThroughMessageId is the newest INBOUND message you read (from getTextThreadMessages), so a reply newer than it keeps the thread in Needs reply. Pass handledThroughMessageId null to put the thread back in Needs reply. Returns false when you cannot act on the thread or the message is not its inbound.

## Call

```ts
const result = await client.conversations.setInboxThreadHandled({ textConversationId: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetInboxThreadHandledMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetInboxThreadHandledMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `textConversationId` | `String!` | yes | — |
| `handledThroughMessageId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "smsMutation": {
    "setConversationNeedsReplyHandled": true
  }
}
```
