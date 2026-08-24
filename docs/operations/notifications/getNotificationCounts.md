<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getNotificationCounts

query · domain `notifications` · requires the READ scope

Unread and read counts for your own notification feed (the badge numbers). Optional notificationTypeFilter narrows to one type — use an EXACT value from getAvailableNotificationTypes (an unrecognized string returns 0/0, not an error). Cheap poll for "do I have anything new" before calling listNotifications.

## Call

```ts
const result = await client.notifications.getNotificationCounts()
// → Promise<GetNotificationCountsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetNotificationCountsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `notificationTypeFilter` | `String` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "notificationQuery": {
    "getNotificationCounts": {
      "unreadCount": true,
      "readCount": true
    }
  }
}
```
