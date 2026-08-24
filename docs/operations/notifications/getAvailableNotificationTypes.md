<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getAvailableNotificationTypes

query · domain `notifications` · requires the READ scope

The catalog of notification types you can filter by — each with its notificationType (the exact string to pass as notificationTypeFilter on listNotifications / getNotificationCounts), a human description, and a category. Call this first to filter reliably: notificationTypeFilter is a free string, so a typo silently returns an empty feed rather than an error.

## Call

```ts
const result = await client.notifications.getAvailableNotificationTypes()
// → Promise<GetAvailableNotificationTypesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetAvailableNotificationTypesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "notificationQuery": {
    "getAvailableNotificationTypes": {
      "notificationType": true,
      "description": true,
      "category": true
    }
  }
}
```
