<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getMyAvailabilitySchedule

query · domain `appointments` · requires the READ scope

Fetch the key owner's saved availability schedule — timezone, weeklyHours (per-weekday time windows), and dateOverrides (per-date exceptions). Null when the user has never saved one (the app then applies its default schedule). Read before setMyAvailabilitySchedule to get the current values.

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
