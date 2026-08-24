<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listAppointmentReminders

query · domain `appointments` · requires the READ scope

List the organization's appointment reminders (SMS sent to the contact before an appointment starts — message, amountBefore + unitBefore). Use a reminder's id as appointmentReminderWorkflowGroupId in createAppointment/updateAppointment to attach it (the appointment responses echo it under the same name).

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
      "message": true,
      "amountBefore": true,
      "unitBefore": true,
      "createdAt": true
    }
  }
}
```
