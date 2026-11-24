<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# readMyChat

query · domain `myChats` · requires the READ scope

A page of one of the key owner's own chats (`chatId` from searchMyChats): what was said and done in it, by turn. `fromTurn`/`toTurn` pick the turns; null reads the most recent page.

## Call

```ts
const result = await client.myChats.readMyChat({ chatId: '<id>' })
// → Promise<ReadMyChatQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ReadMyChatQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `chatId` | `ID!` | yes | — |
| `fromTurn` | `Int` | no | — |
| `toTurn` | `Int` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "agentChatQuery": {
    "readMyChat": true
  }
}
```
