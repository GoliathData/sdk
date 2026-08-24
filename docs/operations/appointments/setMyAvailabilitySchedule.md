<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setMyAvailabilitySchedule

mutation · domain `appointments` · requires the WRITE scope

Create or replace the key owner's availability schedule (full replacement — read getMyAvailabilitySchedule first and send back a modified copy). Requires timezone and weeklyHours (per-weekday time windows); dateOverrides optional. This schedule drives the open slots booking pages offer for the user.

## Call

```ts
const result = await client.appointments.setMyAvailabilitySchedule({ timezone: '<text>', weeklyHours: <JSON> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetMyAvailabilityScheduleMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetMyAvailabilityScheduleMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `timezone` | `String!` | yes | — |
| `weeklyHours` | `JSON!` | yes | — |
| `dateOverrides` | `JSON` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "availabilityScheduleMutation": {
    "upsert": {
      "id": true,
      "userId": true,
      "timezone": true,
      "weeklyHours": true,
      "dateOverrides": true,
      "updatedAt": true
    }
  }
}
```
