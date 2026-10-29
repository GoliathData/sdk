<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getOrganizationSettings

query · domain `account` · requires the READ scope

Your organization's profile and org-wide settings in one read: name, booking-link `slug`, `websiteUrl`, `timezone` (null = never set, not UTC), `alwaysExcludeDncTexts` (texts skip National DNC numbers), `aiCoOwnedLineHeadStartSeconds`, `textReplyLinePolicy` and `callLinePolicy` (which line a text or a manual dial defaults to), `inboxDefaultView`, `suggestionAudience`, `meetingNotetakerEnabled`, `outboundPause` (null = sending is on; else when and by whom everything was paused), `leadRouting.assigneeUserIds` (who gets new skip-traced leads; empty = nobody).

## Call

```ts
const result = await client.account.getOrganizationSettings()
// → Promise<GetOrganizationSettingsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetOrganizationSettingsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "currentUser": {
    "id": true,
    "organization": {
      "id": true,
      "name": true,
      "slug": true,
      "websiteUrl": true,
      "timezone": true,
      "alwaysExcludeDncTexts": true,
      "aiCoOwnedLineHeadStartSeconds": true,
      "textReplyLinePolicy": true,
      "callLinePolicy": true,
      "inboxDefaultView": true,
      "suggestionAudience": true,
      "meetingNotetakerEnabled": true,
      "isBrandingEnabled": true,
      "outboundPause": {
        "pausedAt": true,
        "pausedBy": {
          "id": true
        }
      },
      "leadRouting": {
        "assigneeUserIds": true
      }
    }
  }
}
```
