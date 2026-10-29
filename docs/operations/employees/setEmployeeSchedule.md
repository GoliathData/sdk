<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setEmployeeSchedule

mutation · domain `employees` · requires the WRITE scope

Replace (or add) the schedule of one employee on one contact (`attachmentId` from getContactEmployees). A fresh cadence: runs already spent do not count against it. A schedule is a 5-field cron (`cronExpression`) read in an IANA `timezone`, at most once a day, and `maxRuns`, how many runs before it stops (never open-ended; at most five years of runs). Each run can text, email or call the contact, so it needs their yes; a card's counts.

## Call

```ts
const result = await client.employees.setEmployeeSchedule({ attachmentId: '<id>', cronExpression: '<text>', timezone: '<text>', maxRuns: 0 }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetEmployeeScheduleMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetEmployeeScheduleMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `attachmentId` | `ID!` | yes | — |
| `cronExpression` | `String!` | yes | — |
| `timezone` | `String!` | yes | — |
| `maxRuns` | `Int!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "setAiEmployeeSchedule": {
      "id": true,
      "agentId": true,
      "schedule": {
        "cronExpression": true,
        "timezone": true,
        "nextFireAt": true,
        "maxRuns": true,
        "runCount": true
      }
    }
  }
}
```
