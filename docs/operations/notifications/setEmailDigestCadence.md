<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setEmailDigestCadence

mutation · domain `notifications` · requires the WRITE scope

When your notification emails go out: AS_IT_HAPPENS (one email a few minutes after a notification) or DAILY (one email each morning at 8am in your timezone; AI hand-offs and workflow pages still arrive right away). Yours only.

## Call

```ts
const result = await client.notifications.setEmailDigestCadence({ cadence: <EmailDigestCadence> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetEmailDigestCadenceMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetEmailDigestCadenceMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `cadence` | `EmailDigestCadence!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "notificationMutation": {
    "setEmailDigestCadence": {
      "id": true,
      "emailDigestCadence": true
    }
  }
}
```
