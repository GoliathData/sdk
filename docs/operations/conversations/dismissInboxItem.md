<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# dismissInboxItem

mutation · domain `conversations` · requires the ADMIN scope

Dismiss one inbox row, the app inbox's Dismiss: it is hidden from the inbox of the line or mailbox it belongs to, and listInboxThreads no longer returns it. itemId is the row's id and itemType its type (MESSAGE | CALL | EMAIL); a CALL dismisses that number's whole day of calls, an EMAIL its whole thread. There is NO undo and no view of dismissed rows, in the app or here, so confirm with the user first; to clear an unread badge use markInboxThreadsRead instead. Organization admins only, like the app. A row outside your organization is refused (FORBIDDEN).

## Call

```ts
const result = await client.conversations.dismissInboxItem({ itemId: '<id>', itemType: <InboxItemType> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DismissInboxItemMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DismissInboxItemMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `itemId` | `ID!` | yes | — |
| `itemType` | `InboxItemType!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "inboxMutation": {
    "dismissInboxItem": true
  }
}
```
