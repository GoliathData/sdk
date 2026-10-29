<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# markInboxThreadsRead

mutation · domain `conversations` · requires the WRITE scope

Mark inbox rows READ (isRead: true) or UNREAD (false), the app inbox's read/unread. Pass the ids per channel, straight from listInboxThreads: a MESSAGE row's id in textConversationIds, a CALL row's id (and every id in its groupedCallIds) in callIds, an EMAIL row's id in emailMessageIds. Omit a list for a channel you are not changing. Returns per channel what changed: smsMutation and callsMutation are row COUNTS, emailMutation lists each email now marked. An id you cannot act on (not yours, or a teammate's without VIEW_TEAM_CALLS_TEXTS or VIEW_ALL_PHONES) is skipped, never an error, so a count lower than you sent means some were skipped.

## Call

```ts
const result = await client.conversations.markInboxThreadsRead({ isRead: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<MarkInboxThreadsReadMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `MarkInboxThreadsReadMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `isRead` | `Boolean!` | yes | — |
| `textConversationIds` | `[String!]` | no | [] |
| `callIds` | `[ID!]` | no | [] |
| `emailMessageIds` | `[ID!]` | no | [] |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "smsMutation": {
    "toggleBulkConversationSeen": true
  },
  "callsMutation": {
    "toggleBulkCallSeen": true
  },
  "emailMutation": {
    "toggleBulkEmailRead": {
      "id": true,
      "isRead": true
    }
  }
}
```
