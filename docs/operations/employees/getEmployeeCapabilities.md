<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getEmployeeCapabilities

query · domain `employees` · requires the READ scope

What an AI employee can do, read BEFORE saying it cannot: each switchable ability on or off now and its `gate`, the abilities every employee has (`alwaysOn`), and the platform `limits` no setting lifts, each with its `nearestAlternative`.

## Call

```ts
const result = await client.employees.getEmployeeCapabilities({ employeeId: '<id>' })
// → Promise<GetEmployeeCapabilitiesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetEmployeeCapabilitiesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `employeeId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesQuery": {
    "contactAgentCapabilities": {
      "abilities": {
        "tool": true,
        "label": true,
        "on": true,
        "explicitlySet": true,
        "gate": true
      },
      "alwaysOn": {
        "tool": true,
        "label": true
      },
      "limits": {
        "truth": true,
        "nearestAlternative": true
      }
    }
  }
}
```
