<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listNotifications

query · domain `notifications` · requires the READ scope

List your in-app notifications (the bell feed), newest first. Optional filters: notificationTypeFilter (one notification type — use an EXACT value from getAvailableNotificationTypes; an unrecognized string is not an error, it just returns an empty feed with total 0), seen (true = only read, false = only unread, omitted = both), and searchTerm. Cursor-paginated — pass the returned canFetchNext as a signal there is another page and re-call with cursor set to the last notification's id (limit defaults to 25, capped at 50). total is the full match count and hasUnread flags any unread in the feed, so nothing is silently truncated. Reads ONLY your own notifications — true for EVERY key including an admin's, because this operation exposes no recipient selector at all. The app does have the admin/Goliath-staff teammate feed (one or more teammates' notifications combined), so if the user asks to see a colleague's bell, point them at the app instead of saying nobody can see it. Each row carries the related-record ids (contactId, dealId, noteId, replyId, taskId, callId) and actionType/actionTargetId for deep-linking.

## Call

```ts
const result = await client.notifications.listNotifications()
// → Promise<ListNotificationsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListNotificationsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `limit` | `Int` | no | 25 |
| `cursor` | `String` | no | — |
| `notificationTypeFilter` | `String` | no | — |
| `seen` | `Boolean` | no | — |
| `searchTerm` | `String` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "notificationQuery": {
    "paginateUserNotifications": {
      "notifications": {
        "id": true,
        "userId": true,
        "notificationType": true,
        "title": true,
        "content": true,
        "seen": true,
        "createdAt": true,
        "actionType": true,
        "actionTargetId": true,
        "contactId": true,
        "dealId": true,
        "noteId": true,
        "replyId": true,
        "taskId": true,
        "callId": true
      },
      "total": true,
      "hasUnread": true,
      "canFetchNext": true,
      "canFetchPrevious": true
    }
  }
}
```
