<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getMyAvailabilitySchedule

query · domain `appointments` · requires the READ scope

Fetch the key owner's saved availability schedule — timezone, weeklyHours (per-weekday time windows), and dateOverrides (per-date exceptions). Null when the user has never saved one (the app then applies its default schedule). Read before setMyAvailabilitySchedule to get the current values. "weeklyHours" and "dateOverrides" are raw JSON with a FIXED shape, and this text is their only documentation. "weeklyHours" is a list of day rules, one per bookable weekday: { "day": 0-6 with Sunday = 0 through Saturday = 6, "intervals": [ { "start": "HH:MM", "end": "HH:MM" } ] } — a weekday with no entry is not bookable at all. "dateOverrides" (optional) is a list of exceptions that REPLACE that day's weekly hours, in one of two shapes: a single date { "date": "YYYY-MM-DD", "intervals": [...] } or a span { "startDate": "YYYY-MM-DD", "endDate": "YYYY-MM-DD", "intervals": [...] }; either may add "repeat": "monthly" (same day-of-month every month) or "repeat": "yearly" (same month/day every year) — omit "repeat" for a one-off. "intervals": [] means UNAVAILABLE for that date or span, which is how PTO, holidays and "block me off" are expressed. The write REJECTS the whole save (nothing is stored) when: "weeklyHours" is empty (at least one day is required — block a whole week with a "dateOverrides" span, not by clearing the week); a time is not strict 24-hour "HH:MM" ("9:00" and "5pm" are invalid); an interval's "end" is not after its "start"; two intervals in the same day or override overlap (touching, 09:00-12:00 then 12:00-17:00, is fine); a date is not a real calendar date; a span's "startDate" equals its "endDate" (write a single "date" instead); or a one-off span's "endDate" is an earlier calendar date than its "startDate". A one-off span crossing a month or year end is fine as long as the dates are written in full ("2026-12-20" to "2027-01-02") — do NOT add "repeat" to make a one-time absence span the year end, that makes it recur every year. Only a RECURRING span may have an "endDate" that reads earlier than its "startDate" ("12-29" to "01-02" every year), because that is how a recurring window wraps. Example of a complete valid payload: {"timezone":"America/Chicago","weeklyHours":[{"day":1,"intervals":[{"start":"09:00","end":"12:00"},{"start":"13:00","end":"17:00"}]},{"day":3,"intervals":[{"start":"09:00","end":"17:00"}]},{"day":5,"intervals":[{"start":"09:00","end":"15:00"}]}],"dateOverrides":[{"date":"2026-12-24","intervals":[{"start":"09:00","end":"12:00"}]},{"startDate":"2026-11-23","endDate":"2026-11-27","intervals":[],"repeat":"yearly"}]}

## Call

```ts
const result = await client.appointments.getMyAvailabilitySchedule()
// → Promise<GetMyAvailabilityScheduleQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetMyAvailabilityScheduleQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "availabilityScheduleQuery": {
    "mySchedule": {
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
