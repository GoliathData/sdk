<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createAppointmentReminder

mutation · domain `appointments` · requires the WRITE scope

A reminder TEXTS REAL CONTACTS automatically. Before calling, show the user every step's exact message and timing and wait for them to confirm that copy; never invent or reword it and send it unseen. Messages may use {{merge fields}} (the APPOINTMENT keys under MERGE FIELDS in updateWorkflowGraph's description); a step with a field an appointment cannot fill is NOT sent for it, so keep to fields every appointment has. Create a reminder: one SMS to the appointment's linked contacts per step, each sent amountBefore + unitBefore (MINUTES | HOURS | DAYS; amountBefore > 0) before its start, e.g. steps: [{message, amountBefore: 30, unitBefore: MINUTES}] for "30 minutes before". isGlobal: true makes it the org default, replacing any prior one. The org DEFAULT reminder ("Run for every appointment") is attached automatically to booking-page and AI-employee bookings and preselected in the app's appointment form; NOT to appointments created through this API (pass its id as appointmentReminderWorkflowGroupId on createAppointment) nor to existing ones (updateAppointment attaches it). With none flagged and exactly ONE reminder, that one is the default anyway. So the org's FIRST reminder texts new bookings even without isGlobal; any other without it is a preset that sends for nothing until attached. listAppointmentReminders first: when one with the same timing exists, offer to make it the default (setDefaultAppointmentReminder) or edit it rather than add a duplicate.

## Call

```ts
const result = await client.appointments.createAppointmentReminder({ steps: [<AppointmentReminderStepInput>] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateAppointmentReminderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateAppointmentReminderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `steps` | `[AppointmentReminderStepInput!]!` | yes | — |
| `isGlobal` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "appointmentReminderMutation": {
    "createAppointmentReminder": {
      "id": true,
      "steps": {
        "message": true,
        "amountBefore": true,
        "unitBefore": true
      },
      "isGlobal": true,
      "createdAt": true
    }
  }
}
```
