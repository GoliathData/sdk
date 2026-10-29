<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# runEmployeesOnContacts

mutation · domain `employees` · requires the WRITE scope

Put AI employees on contacts and wake each pairing once (runNow, default true), and/or on a `schedule` (cron, timezone, maxRuns; no denser than daily). `message` (max 2000 chars) is an internal instruction carried into every run; the contact never sees it. Employees must be switched on. Like attachEmployeeToContacts it puts back a contact someone took that employee off (unless they did so after this call), so leave those out first. A contact the employee already has a follow-up booked for (`nextBookedFollowUpAt` on getEmployeeCaseload) gets a second touch before that one: say how many of the batch have one, so the person can choose. A bulk task (`bulkTaskId`, getBulkTask). The person approves it on a card.

## Call

```ts
const result = await client.employees.runEmployeesOnContacts({ employeeIds: ['<id>'], contactIds: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RunEmployeesOnContactsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RunEmployeesOnContactsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `employeeIds` | `[ID!]!` | yes | — |
| `contactIds` | `[String!]!` | yes | — |
| `message` | `String` | no | — |
| `runNow` | `Boolean` | no | true |
| `schedule` | `BulkAiEmployeeScheduleInput` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "createBulkTriggerAgentSessionTask": {
      "bulkTaskId": true
    }
  }
}
```
