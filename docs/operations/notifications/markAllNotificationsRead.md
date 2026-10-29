<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# markAllNotificationsRead

mutation · domain `notifications` · requires the WRITE scope

Mark your WHOLE notification feed read (`isSeen: true`) or unread (false). `userId` must be your own (getMyProfile `currentUser.id`); any other is refused. Optional `notificationTypeFilter` (exact getAvailableNotificationTypes value) narrows it; `notIncludedNotificationIds` are left alone. Returns how many changed. Never a teammate's feed.

## Call

```ts
const result = await client.notifications.markAllNotificationsRead({ userId: '<text>', isSeen: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<MarkAllNotificationsReadMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `MarkAllNotificationsReadMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `userId` | `String!` | yes | — |
| `isSeen` | `Boolean!` | yes | — |
| `notificationTypeFilter` | `String` | no | — |
| `notIncludedNotificationIds` | `[String!]` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "notificationMutation": {
    "toggleBulkNotificationSeen": true
  }
}
```
