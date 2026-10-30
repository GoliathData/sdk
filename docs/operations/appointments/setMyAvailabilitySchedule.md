<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setMyAvailabilitySchedule

mutation · domain `appointments` · requires the WRITE scope

Create or replace the key owner's availability schedule, a FULL replacement: read getMyAvailabilitySchedule and send back a modified copy, every override to keep included. Requires timezone (an IANA zone such as America/Chicago, the zone every time is read in) and weeklyHours; dateOverrides optional. It drives the open slots their booking pages offer. "weeklyHours" and "dateOverrides" are raw JSON with a FIXED shape, and this text is their only documentation. "weeklyHours": one day rule per bookable weekday, { "day": 0-6 with Sunday = 0 through Saturday = 6, "intervals": [ { "start": "HH:MM", "end": "HH:MM" } ] }; a weekday with no entry is not bookable. "dateOverrides" (optional): exceptions that REPLACE that day's weekly hours, a single date { "date": "YYYY-MM-DD", "intervals": [...] } or a span { "startDate": "YYYY-MM-DD", "endDate": "YYYY-MM-DD", "intervals": [...] }; either may add "repeat": "monthly" (same day-of-month) or "repeat": "yearly" (same month/day); omit "repeat" for a one-off. "intervals": [] means UNAVAILABLE for that date or span (PTO, holidays, "block me off"). "reason": "away" is set by Away until; keep it as is. The write REJECTS the whole save (nothing stored) when: "weeklyHours" is empty (block a whole week with a "dateOverrides" span instead); a time is not strict 24-hour "HH:MM" ("9:00" and "5pm" are invalid); an interval's "end" is not after its "start"; intervals in one day or override overlap (touching, 09:00-12:00 then 12:00-17:00, is fine); a date is not a real calendar date; a span's "startDate" equals its "endDate" (write a single "date"); or a one-off span's "endDate" is an earlier calendar date than its "startDate". A one-off span may cross a month or year end with the dates in full ("2026-12-20" to "2027-01-02") — do NOT add "repeat" to make a one-time absence span the year end, that makes it recur every year. Only a RECURRING span may have an "endDate" that reads earlier than its "startDate" ("12-29" to "01-02" every year), which is how it wraps. Example of a complete valid payload: {"timezone":"America/Chicago","weeklyHours":[{"day":1,"intervals":[{"start":"09:00","end":"12:00"},{"start":"13:00","end":"17:00"}]},{"day":3,"intervals":[{"start":"09:00","end":"17:00"}]},{"day":5,"intervals":[{"start":"09:00","end":"15:00"}]}],"dateOverrides":[{"date":"2026-12-24","intervals":[{"start":"09:00","end":"12:00"}]},{"startDate":"2026-11-23","endDate":"2026-11-27","intervals":[],"repeat":"yearly"}]}

## Call

```ts
const result = await client.appointments.setMyAvailabilitySchedule({ timezone: '<text>', weeklyHours: <JSON> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetMyAvailabilityScheduleMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetMyAvailabilityScheduleMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `timezone` | `String!` | yes | — |
| `weeklyHours` | `JSON!` | yes | — |
| `dateOverrides` | `JSON` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "availabilityScheduleMutation": {
    "upsert": {
      "id": true,
      "userId": true,
      "timezone": true,
      "weeklyHours": true,
      "dateOverrides": true,
      "updatedAt": true
    }
  }
}
```
