<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteNotifications

mutation · domain `notifications` · requires the WRITE scope

Delete notifications from your feed for good, by id (listNotifications). Only your own; another user's id is skipped. Returns how many were deleted. To clear the badge, mark them read instead.

## Call

```ts
const result = await client.notifications.deleteNotifications({ notificationIds: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteNotificationsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteNotificationsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `notificationIds` | `[String!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "notificationMutation": {
    "deleteNotifications": true
  }
}
```
