<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setHandoffNotifications

mutation · domain `notifications` · requires the WRITE scope

Your own notifications when an AI employee hands a conversation to you (asks a person to take over): `sms`, `email`, `inApp` and `push`, each true to turn it on, false off, omitted to keep it. Returns the channels as saved; `diagnostics` says when a channel turned on still delivers nothing because it is off in your overall notification settings. Yours only: a teammate changes their own.

## Call

```ts
const result = await client.notifications.setHandoffNotifications(undefined, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetHandoffNotificationsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetHandoffNotificationsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `sms` | `Boolean` | no | — |
| `email` | `Boolean` | no | — |
| `inApp` | `Boolean` | no | — |
| `push` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "setHandoffNotifications": {
      "ok": true,
      "channels": {
        "sms": true,
        "email": true,
        "inApp": true,
        "push": true
      },
      "diagnostics": true
    }
  }
}
```
