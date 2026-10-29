<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setDefaultAppointmentReminder

mutation · domain `appointments` · requires the WRITE scope

Turn "Run for every appointment" on or off for one reminder (appointmentReminderId), its messages and timing untouched. isGlobal: true makes it the org default and clears any previous one (an org has at most one); false clears it on this one. The org DEFAULT reminder ("Run for every appointment") is attached automatically to booking-page and AI-employee bookings and preselected in the app's appointment form; NOT to appointments created through this API (pass its id as appointmentReminderWorkflowGroupId on createAppointment) nor to existing ones (updateAppointment attaches it). With none flagged and exactly ONE reminder, that one is the default anyway. Confirm with the user before switching it on: from then on every booking texts its contacts this reminder's copy.

## Call

```ts
const result = await client.appointments.setDefaultAppointmentReminder({ appointmentReminderId: '<id>', isGlobal: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetDefaultAppointmentReminderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetDefaultAppointmentReminderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `appointmentReminderId` | `ID!` | yes | — |
| `isGlobal` | `Boolean!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "appointmentReminderMutation": {
    "updateAppointmentReminder": {
      "id": true,
      "isGlobal": true
    }
  }
}
```
