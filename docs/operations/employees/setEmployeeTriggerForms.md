<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setEmployeeTriggerForms

mutation · domain `employees` · requires the WRITE scope

Set which forms wake an AI employee when someone submits one. `formIds` REPLACES the set (ids from listEmployeeChannelOptions; every one must be this organization's); `[]` means no form wakes it. A form that is not live yet wakes it once it goes live. On an employee that is switched on it takes effect on its next run: needs their yes; a card’s counts.

## Call

```ts
const result = await client.employees.setEmployeeTriggerForms({ employeeId: '<id>', formIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetEmployeeTriggerFormsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetEmployeeTriggerFormsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `employeeId` | `ID!` | yes | — |
| `formIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "setContactAgentTriggerForms": {
      "id": true,
      "triggerForms": {
        "id": true,
        "name": true,
        "status": true
      },
      "updatedAt": true
    }
  }
}
```
