<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# markNotificationsRead

mutation · domain `notifications` · requires the WRITE scope

Mark specific notifications read or unread by id. Pass isSeen: true to mark read (clears them from the unread badge) or false to mark unread. notificationIds come from listNotifications. Only your own notifications are affected — a notification id belonging to another user is a silent no-op, never an error. Returns the updated {id, seen} for each row that changed.

## Call

```ts
const result = await client.notifications.markNotificationsRead({ notificationIds: ['<text>'], isSeen: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<MarkNotificationsReadMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `MarkNotificationsReadMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `notificationIds` | `[String!]!` | yes | — |
| `isSeen` | `Boolean!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "notificationMutation": {
    "toggleNotificationSeen": {
      "id": true,
      "seen": true
    }
  }
}
```
