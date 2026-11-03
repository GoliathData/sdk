<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setQuietHours

mutation · domain `notifications` · requires the WRITE scope

Your quiet hours, in minutes after local midnight (0 to 1410, multiples of 30; default 1260 to 480; start equal to end is no window). Scheduled task results wait until they end; answers to your own asks do not.

## Call

```ts
const result = await client.notifications.setQuietHours({ enabled: false, startMinute: 0, endMinute: 0 }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetQuietHoursMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetQuietHoursMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `enabled` | `Boolean!` | yes | — |
| `startMinute` | `Int!` | yes | — |
| `endMinute` | `Int!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "notificationMutation": {
    "setQuietHours": {
      "id": true,
      "quietHoursEnabled": true,
      "quietHoursStartMinute": true,
      "quietHoursEndMinute": true
    }
  }
}
```
