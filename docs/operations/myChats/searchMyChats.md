<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# searchMyChats

query · domain `myChats` · requires the READ scope

Search the key owner's own Ask Goliath chats by words or meaning ("refin" finds the refinance chat, "exact phrases", -excluded words), archived ones included: best match first, each chat with the matching passage (`snippet`). Open one with readMyChat.

## Call

```ts
const result = await client.myChats.searchMyChats({ query: '<text>' })
// → Promise<SearchMyChatsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SearchMyChatsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `query` | `String!` | yes | — |
| `limit` | `Int` | no | 20 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.
- Rate limited: shares the per-key analytics bucket; 429s carry a Retry-After header.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "agentChatQuery": {
    "searchMyChats": {
      "snippet": true,
      "chat": {
        "id": true,
        "title": true,
        "lastActivityAt": true,
        "archived": true
      }
    }
  }
}
```
