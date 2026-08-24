<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateAppointment

mutation · domain `appointments` · requires the WRITE scope

Update an appointment by id (from listAppointments) — title, times, location, description, outcome; add/remove participants (addUserIds/removeUserIds) and linked contacts (addContactIds/removeContactIds); switch or clear the reminder via appointmentReminderWorkflowGroupId (omit = unchanged, null = clear). Only passed fields change. The appointment must belong to your organization. The edit is pushed to the external calendar event when the appointment already has one. When it does NOT have one, pass createCalendarEvent: true to create it — that is how an appointment whose original sync never landed finally reaches a calendar, and it is opt-in because a missing event might equally mean somebody deliberately kept the appointment inside Goliath. The event is created on the API key owner's calendar with them as organizer, so only ask for it when that is the right host. Read calendarSync on the response with the same rule as createAppointment: only SYNCED means the external calendar now matches. A reschedule that comes back SKIPPED_NO_ACCESS or FAILED left the guests' calendars showing the OLD time; say so plainly instead of reporting the meeting as moved.

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
