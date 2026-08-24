<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createAppointment

mutation · domain `appointments` · requires the WRITE scope

Create an appointment. Requires title, timezone, startDate, and endDate; optionally set location, description, linked contactIds (must be accessible to the key owner), participant userIds (from listTeammates), and appointmentReminderWorkflowGroupId (from listAppointmentReminders — omit to attach the org default reminder if one exists, pass null to opt out). By default the appointment is ALSO created on the API key owner's own connected Google/Microsoft calendar (they are the organizer regardless of userIds), and that is what invites the participants and linked contacts as guests — pass createCalendarEvent: false to keep it inside Goliath only. ALWAYS read calendarSync on the response before telling anyone the meeting is booked: SYNCED = the calendar event exists and guests were invited; NOT_REQUESTED = you opted out, so it is Goliath-only; SKIPPED_NO_ACCESS = no connected calendar could be written to; SKIPPED_WRITE_BLOCKED = a provider was reachable but deliberately not written; FAILED = the provider call errored and the calendar may be stale. Only SYNCED means an invitation went out — for every other value say the appointment was recorded but the calendar invite did not happen, and never imply otherwise. Double-booking is allowed and nothing here warns you. listAppointments is the ONLY conflict check available through this API, and it sees ONLY what Goliath has recorded as an appointment. Some provider events DO land there: on a CONNECTED Google/Microsoft calendar, sync ingests an event when it already maps to a Goliath appointment, is an out-of-office blocker, or has an attendee whose email matches a CRM contact. Everything else on that calendar is never ingested and is invisible here — a busy event whose attendees are not contacts, an event marked free/transparent, and every calendar that was never connected. A MEMBER/ISA key also sees only its own rows whatever participants it passes. So a clear listAppointments window is NOT proof the participants are free: say the GOLIATH calendar looks clear, never that the time is free. The live cross-provider availability check (LOCAL + GOOGLE + MICROSOFT busy slots, read from the provider rather than from ingested rows) exists in the app's own scheduler and is not exposed here.

## Call

```ts
const result = await client.appointments.createAppointment({ title: '<text>', timezone: <Timezone>, startDate: <DateTime>, endDate: <DateTime> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateAppointmentMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateAppointmentMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `title` | `String!` | yes | — |
| `timezone` | `Timezone!` | yes | — |
| `startDate` | `DateTime!` | yes | — |
| `endDate` | `DateTime!` | yes | — |
| `location` | `String` | no | — |
| `description` | `String` | no | — |
| `contactIds` | `[ID!]` | no | — |
| `userIds` | `[String!]` | no | — |
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
    "createAppointment": {
      "id": true,
      "title": true,
      "startDate": true,
      "endDate": true,
      "timezone": true,
      "location": true,
      "description": true,
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
