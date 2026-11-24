<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# readMyChatFile

query · domain `myChats` · requires the READ scope

A file on one of the key owner's own chats, by its id (an attachment's id is on its message's "[Attached files: …]" line): a text file's words (CSV, TSV, JSON, text), a ZIP's listing or one file in it (`entryPath`). Any other file (an image, a PDF) answers with a `downloadUrl` that opens it for 15 minutes.

## Call

```ts
const result = await client.myChats.readMyChatFile({ artifactId: '<id>' })
// → Promise<ReadMyChatFileQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ReadMyChatFileQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `artifactId` | `ID!` | yes | — |
| `entryPath` | `String` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "agentChatQuery": {
    "readMyChatFile": true
  }
}
```
