<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createAppointment

mutation · domain `appointments` · requires the WRITE scope

Create an appointment. Requires title, timezone, startDate, and endDate; optionally set location, description, linked contactIds (must be accessible to the key owner), participant userIds (from listTeammates), and appointmentReminderWorkflowGroupId (from listAppointmentReminders — omit to attach the org default reminder if one exists, pass null to opt out). By default the appointment is ALSO created on a connected Google/Microsoft calendar — the API key owner's, EXCEPT when userIds names exactly one teammate and not the key owner, in which case it goes on that teammate's calendar and they are the organizer — and that is what invites the other participants and linked contacts as guests; pass createCalendarEvent: false to keep it inside Goliath only. ALWAYS read calendarSync on the response before telling anyone the meeting is booked: SYNCED = the calendar event exists and guests were invited; NOT_REQUESTED = you opted out, so it is Goliath-only; SKIPPED_NO_ACCESS = no connected calendar could be written to; SKIPPED_WRITE_BLOCKED = a provider was reachable but deliberately not written; FAILED = the provider call errored and the calendar may be stale. Only SYNCED means an invitation went out — for every other value say the appointment was recorded but the calendar invite did not happen, and never imply otherwise. Double-booking is allowed and nothing here warns you, so run checkAvailability FIRST — over the same startDate/endDate, with every userId you will pass here PLUS the key owner (getMyProfile), unless userIds is exactly one teammate without the key owner, in which case that teammate is the organizer and the only calendar to check — and show its conflicts before booking: the organizer's calendar is where the provider event lands, so a check without them is incomplete. It is the live check across Goliath appointments AND the participants' connected Google/Microsoft calendars, read from the provider. listAppointments is NOT a conflict check — it sees ONLY what Goliath has recorded as an appointment. Some provider events DO land there: on a CONNECTED Google/Microsoft calendar, sync ingests an event when it already maps to a Goliath appointment, is an out-of-office blocker, or has an attendee whose email matches a CRM contact. Everything else on that calendar is never ingested and is invisible here — a busy event whose attendees are not contacts, an event marked free/transparent, and every calendar that was never connected. A MEMBER/ISA key also sees only its own rows whatever participants it passes. So a clear listAppointments window is NOT proof the participants are free: say the GOLIATH calendar looks clear, never that the time is free — and even after a clean checkAvailability, say no conflicts were found rather than that the slot is free, since an unconnected calendar cannot be checked.

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
