<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setInboxThreadStarred

mutation · domain `conversations` · requires the WRITE scope

Star (starred: true) or unstar a TEXT thread for everyone in the organization, so it shows under the inbox's Starred filter (listInboxThreads starredOnly). textConversationId is a MESSAGE row's id. Calls and emails are starred in the app only. Returns false when you cannot act on the thread.

## Call

```ts
const result = await client.conversations.setInboxThreadStarred({ textConversationId: '<text>', starred: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetInboxThreadStarredMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetInboxThreadStarredMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `textConversationId` | `String!` | yes | — |
| `starred` | `Boolean!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "smsMutation": {
    "setConversationStarred": true
  }
}
```
