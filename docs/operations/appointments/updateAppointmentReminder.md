<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateAppointmentReminder

mutation · domain `appointments` · requires the WRITE scope

A reminder TEXTS REAL CONTACTS automatically. Before calling, show the user every step's exact message and timing and wait for them to confirm that copy; never invent or reword it and send it unseen. Messages may use {{merge fields}} (the APPOINTMENT keys under MERGE FIELDS in updateWorkflowGraph's description); a step with a field an appointment cannot fill is NOT sent for it, so keep to fields every appointment has. Edit a reminder by appointmentReminderId (listAppointmentReminders). steps REPLACES the whole set: send every step to keep, with its message and timing. A step left out stops sending (booked appointments included), a kept step's scheduled texts take the edit, and a NEW step reaches only appointments booked after the edit. isGlobal: omit to leave the default untouched, true to make this the default, false to stop it being one. Only the default: setDefaultAppointmentReminder.

## Call

```ts
const result = await client.appointments.updateAppointmentReminder({ appointmentReminderId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateAppointmentReminderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateAppointmentReminderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `appointmentReminderId` | `ID!` | yes | — |
| `steps` | `[AppointmentReminderStepInput!]` | no | — |
| `isGlobal` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "appointmentReminderMutation": {
    "updateAppointmentReminder": {
      "id": true,
      "steps": {
        "message": true,
        "amountBefore": true,
        "unitBefore": true
      },
      "isGlobal": true,
      "updatedAt": true
    }
  }
}
```
