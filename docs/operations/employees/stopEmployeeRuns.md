<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# stopEmployeeRuns

mutation · domain `employees` · requires the WRITE scope

Stop what one AI employee is doing on one contact right now (getContactEmployees' `isWorkingNow`). The run stops at its next step, with anything it started; it stays on the contact and wakes again the next time something wakes it. A stopped run does not come back. Returns STOP_REQUESTED, or NOTHING_RUNNING when it was idle.

## Call

```ts
const result = await client.employees.stopEmployeeRuns({ contactId: '<id>', employeeId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<StopEmployeeRunsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `StopEmployeeRunsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |
| `employeeId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "stopAiEmployeeRuns": true
  }
}
```
