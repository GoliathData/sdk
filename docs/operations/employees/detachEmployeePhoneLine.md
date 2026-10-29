<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# detachEmployeePhoneLine

mutation · domain `employees` · requires the WRITE scope

Release a phone line an AI employee still holds from before lines were shared (an id from getEmployee `legacyPhoneLines`). It cannot be attached back, since lines are no longer assigned to employees: it stops answering calls to that number and no longer takes on new people who text it. Refused when the line is not on this employee. On an employee that is switched on it takes effect on its next run: needs their yes; a card’s counts.

## Call

```ts
const result = await client.employees.detachEmployeePhoneLine({ employeeId: '<id>', phoneLineId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DetachEmployeePhoneLineMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DetachEmployeePhoneLineMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `employeeId` | `ID!` | yes | — |
| `phoneLineId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "detachContactAgentPhoneLine": {
      "id": true,
      "legacyPhoneLines": {
        "id": true,
        "e164Number": true
      },
      "updatedAt": true
    }
  }
}
```
