<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listAgentConversations

query · domain `askGoliath` · requires the WRITE scope

The key owner's own Ask Goliath chats, newest first, with `appName` (the key that last talked in it). Continue one with sendAgentMessage. Needs a WRITE key.

## Call

```ts
const result = await client.askGoliath.listAgentConversations()
// → Promise<ListAgentConversationsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListAgentConversationsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `limit` | `Int` | no | 20 |
| `offset` | `Int` | no | 0 |
| `archived` | `Boolean` | no | false |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "externalAgentChatQuery": {
    "agentConversations": {
      "items": {
        "id": true,
        "title": true,
        "archived": true,
        "lastActivityAt": true,
        "appName": true
      },
      "hasMore": true
    }
  }
}
```
