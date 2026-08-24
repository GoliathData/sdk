<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteAppointment

mutation · domain `appointments` · requires the WRITE scope

Delete an appointment by id (from listAppointments). Also removes the synced calendar event, if any. The appointment must belong to your organization.

## Call

```ts
const result = await client.appointments.deleteAppointment({ appointmentId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteAppointmentMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteAppointmentMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `appointmentId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "tasksMutation": {
    "deleteAppointment": {
      "id": true,
      "title": true
    }
  }
}
```
