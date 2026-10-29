<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setEmployeeStatus

mutation · domain `employees` · requires the WRITE scope

Switch an AI employee on (ACTIVE) or off (INACTIVE). ON means it starts answering and working the contacts it is on, with real people, right away, which may publish its answer workflows; OFF stops it mid-conversation on every contact it is working. Say which and to how many contacts (getEmployee's `commitments`) and get the person's yes before either. The employee's own chat records the change. Same as the switch on the employee's page.

## Call

```ts
const result = await client.employees.setEmployeeStatus({ employeeId: '<id>', status: <ContactAgentStatus> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetEmployeeStatusMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetEmployeeStatusMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `employeeId` | `ID!` | yes | — |
| `status` | `ContactAgentStatus!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "setContactAgentStatus": {
      "id": true,
      "name": true,
      "status": true,
      "updatedAt": true
    }
  }
}
```
