<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateAppointment

mutation · domain `appointments` · requires the WRITE scope

Update an appointment by id (listAppointments): title, times, location, description, outcome; addUserIds/removeUserIds, addContactIds/removeContactIds; switch or clear the reminder with appointmentReminderWorkflowGroupId (omit = unchanged, null = clear). Only passed fields change. It must belong to your organization. Before moving startDate/endDate, run checkAvailability over the NEW window with the RESULTING participants (the FULL existing participants from listAppointments, minus any removeUserIds plus any addUserIds, never just the additions) plus the key owner (getMyProfile), ALWAYS on an update, with no single-teammate exception here: update-time sync runs as the key owner, and a missing event created with createCalendarEvent: true lands on THEIR calendar. Set excludeAppointmentId to this appointment and show conflicts. If the windows overlap and the key owner organizes without being a participant, the appointment's own mirror can appear as a conflict at the OLD time: treat it as AMBIGUOUS (merged busy ranges can hide a real event), tell the user, and let them confirm against their calendar. The edit is pushed to the external event when there is one. With none, createCalendarEvent: true creates it (how an appointment whose sync never landed reaches a calendar), on the key owner's calendar with them as organizer; it is opt-in, since a missing event may mean it was deliberately kept in Goliath, so only ask for it when that is the right host. Read calendarSync as on createAppointment: only SYNCED means the calendar matches; a reschedule that comes back SKIPPED_NO_ACCESS or FAILED left guests' calendars at the OLD time: say so instead of reporting it moved.

## Call

```ts
const result = await client.appointments.updateAppointment({ appointmentId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateAppointmentMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateAppointmentMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `appointmentId` | `ID!` | yes | — |
| `title` | `String` | no | — |
| `timezone` | `Timezone` | no | — |
| `startDate` | `DateTime` | no | — |
| `endDate` | `DateTime` | no | — |
| `location` | `String` | no | — |
| `description` | `String` | no | — |
| `outcome` | `String` | no | — |
| `addUserIds` | `[String!]` | no | — |
| `removeUserIds` | `[String!]` | no | — |
| `addContactIds` | `[ID!]` | no | — |
| `removeContactIds` | `[ID!]` | no | — |
| `createCalendarEvent` | `Boolean` | no | — |
| `appointmentReminderWorkflowGroupId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "tasksMutation": {
    "updateAppointment": {
      "id": true,
      "title": true,
      "startDate": true,
      "endDate": true,
      "timezone": true,
      "location": true,
      "description": true,
      "outcome": true,
      "appointmentReminderWorkflowGroupId": true,
      "calendarSync": {
        "status": true,
        "provider": true
      },
      "participants": {
        "id": true,
        "firstName": true,
        "lastName": true
      },
      "contacts": {
        "id": true,
        "name": true
      }
    }
  }
}
```
