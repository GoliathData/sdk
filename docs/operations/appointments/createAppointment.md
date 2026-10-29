<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createAppointment

mutation · domain `appointments` · requires the WRITE scope

Create an appointment: title, timezone, startDate, endDate; optional location, description, contactIds (accessible to the key owner), participant userIds (listTeammates), appointmentReminderWorkflowGroupId (listAppointmentReminders; null = no texts to contacts, but participants' 15-minute alert still follows their notification settings; this API applies no org default, so to give it the default pass the isGlobal one's id). By default it is ALSO created on a connected Google/Microsoft calendar, which is what invites the participants and linked contacts as guests: the key owner's, EXCEPT when userIds names exactly one teammate and not the key owner, then that teammate's, as organizer. createCalendarEvent: false keeps it inside Goliath. ALWAYS read calendarSync before telling anyone it is booked: SYNCED = the event exists and guests were invited, the only state where an invite went out (else say it was recorded, not sent); NOT_REQUESTED = Goliath-only; SKIPPED_NO_ACCESS = no connected calendar could be written; SKIPPED_WRITE_BLOCKED = a provider was reachable but deliberately not written; FAILED = the provider errored and the calendar may be stale. Confirm first: title, day, time, zone, participants, contacts and, with a calendar event, whose calendar (it invites them). Double-booking is allowed and nothing here warns, so run checkAvailability FIRST over the same window with every userId plus the key owner (getMyProfile; unless userIds is exactly one teammate without the key owner: then that teammate, the organizer, alone) and show its conflicts. listAppointments is NOT a conflict check: it sees ONLY Goliath appointments. A connected calendar's event lands there only when it already maps to a Goliath appointment, is an out-of-office blocker, or has an attendee whose email matches a CRM contact; everything else (a busy event whose attendees are not contacts, a free/transparent event, any calendar never connected) is never ingested and is invisible here, and a MEMBER key sees only its own rows. So a clear listAppointments window means the GOLIATH calendar looks clear, never that the time is free; even after a clean checkAvailability, say no conflicts were found rather than that the slot is free.

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
