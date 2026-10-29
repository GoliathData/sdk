<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setEmployeeDailyCaps

mutation · domain `employees` · requires the WRITE scope

Set an AI employee's own daily caps, which bound what it spends: `dailyRunCap` (live runs a day) and `dailyCallCap` (connected calls a day). Each is a whole number from 1 to 10,000; there is no 0, so to stop it, switch it off with setEmployeeStatus. An omitted cap is kept; an explicit null removes it (no per-employee cap). No screen sets these. Read the current caps with getEmployee and state the old and new first. Pass `expectedUpdatedAt`. On an employee that is switched on it takes effect on its next run: needs their yes; a card’s counts.

## Call

```ts
const result = await client.employees.setEmployeeDailyCaps({ employeeId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetEmployeeDailyCapsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetEmployeeDailyCapsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `employeeId` | `ID!` | yes | — |
| `dailyRunCap` | `Int` | no | — |
| `dailyCallCap` | `Int` | no | — |
| `expectedUpdatedAt` | `DateTime` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "setAiEmployeeDailyCaps": {
      "id": true,
      "name": true,
      "dailyRunCap": true,
      "dailyCallCap": true,
      "updatedAt": true
    }
  }
}
```
