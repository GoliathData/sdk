<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listAppointmentReminders

query · domain `appointments` · requires the READ scope

The organization's appointment reminders: each with its `steps` (one SMS each, its message and amountBefore + unitBefore lead time, longest lead first) and isGlobal (true on the flagged default). The org DEFAULT reminder ("Run for every appointment") is attached automatically to booking-page and AI-employee bookings and preselected in the app's appointment form; NOT to appointments created through this API (pass its id as appointmentReminderWorkflowGroupId on createAppointment) nor to existing ones (updateAppointment attaches it). With none flagged and exactly ONE reminder, that one is the default anyway. Attach one by passing its id as appointmentReminderWorkflowGroupId to createAppointment/updateAppointment (the responses echo it under that name).

## Call

```ts
const result = await client.appointments.listAppointmentReminders()
// → Promise<ListAppointmentRemindersQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListAppointmentRemindersQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "appointmentReminderQuery": {
    "listAppointmentReminders": {
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
