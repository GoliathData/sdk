<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# assignEmployeeToContact

mutation · domain `employees` · requires the WRITE scope

Put one AI employee on one contact, optionally on a schedule, the contact card's Add. From then on it answers the contact's texts, emails and calls, and a schedule runs it on that cadence. A schedule is a 5-field cron (`cronExpression`) read in an IANA `timezone`, at most once a day, and `maxRuns`, how many runs before it stops (never open-ended; at most five years of runs). The employee must be switched on and from this organization. Many contacts with no schedule: attachEmployeeToContacts. Needs their yes; a card's counts.

## Call

```ts
const result = await client.employees.assignEmployeeToContact({ contactId: '<id>', employeeId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AssignEmployeeToContactMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AssignEmployeeToContactMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |
| `employeeId` | `ID!` | yes | — |
| `schedule` | `AiEmployeeScheduleInput` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "assignAiEmployeeToContact": {
      "id": true,
      "agentId": true,
      "status": true,
      "schedule": {
        "nextFireAt": true,
        "maxRuns": true
      }
    }
  }
}
```
