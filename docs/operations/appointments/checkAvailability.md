<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# checkAvailability

query · domain `appointments` · requires the READ scope

Live conflict check for a proposed slot — run this BEFORE createAppointment, and before moving a time with updateAppointment. Pass userIds, startDate and endDate (endDate must be after startDate). WHOSE CALENDARS: everyone in the appointment's userIds (teammates from listTeammates, and a partner-org participant that listAppointments already shows on a shared appointment is accepted too), PLUS the key owner (their id from getMyProfile) — the key owner is the organizer and the provider event lands on THEIR calendar whenever they are in userIds or userIds names zero or two-plus teammates, so a check without them misses the organizer's own conflicts. The one exception: userIds naming exactly ONE teammate and not the key owner puts the event on that teammate's calendar, so then check that teammate alone — adding the key owner there would surface their unrelated conflicts. That exception is for CREATE only: on an updateAppointment reschedule ALWAYS include the key owner, because update-time calendar sync runs as them and a missing event created with createCalendarEvent: true lands on their calendar. When rescheduling, pass the RESULTING participant set — the appointment's FULL existing participant list (participants from listAppointments) minus anyone you are removing, plus anyone you are adding; never only the additions, and never someone being removed — apply the same organizer rule, and set excludeAppointmentId = the appointment being moved so it does not collide with itself. Known gap on a reschedule whose new window overlaps the old one: when the key owner organizes without being a participant, the appointment's own Google/Microsoft mirror can still show as a GOOGLE/MICROSOFT conflict on the key owner at the OLD time. Treat that row as AMBIGUOUS, never as harmless: provider busy ranges are merged, so it may be only the appointment's mirror OR a real event hiding behind it — say so, and have the user confirm against their calendar before booking over it. userIds are de-duplicated server-side and capped at 100 distinct participants per call. It reads Goliath appointments (source LOCAL) AND each participant's CONNECTED Google/Microsoft calendar live from the provider (source GOOGLE/MICROSOFT) — the check listAppointments cannot do. Returns available plus every overlapping conflicts row: start, end, source, and for a Goliath row its appointmentId and title; an external event's title is null unless the key owner may read that calendar, so a null title is simply 'busy'. available: true means NOTHING WAS FOUND, never that the time is proven free: a calendar that was never connected cannot be checked, and a provider outage degrades SILENTLY to no external conflicts — the response carries no flag for it. So report 'no conflicts found on the calendars Goliath can see', name which participants were checked, and never promise the slot is free. A conflict is information, not a refusal: double-booking is still allowed, so show the conflicts and let the user decide.

## Call

```ts
const result = await client.appointments.checkAvailability({ userIds: ['<id>'], startDate: <DateTime>, endDate: <DateTime> })
// → Promise<CheckAvailabilityQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CheckAvailabilityQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `userIds` | `[ID!]!` | yes | — |
| `startDate` | `DateTime!` | yes | — |
| `endDate` | `DateTime!` | yes | — |
| `excludeAppointmentId` | `ID` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "availabilityQuery": {
    "availabilityForSlot": {
      "available": true,
      "conflicts": {
        "start": true,
        "end": true,
        "source": true,
        "appointmentId": true,
        "title": true
      }
    }
  }
}
```
