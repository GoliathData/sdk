<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listEmployeeSuggestions

query · domain `employees` · requires the READ scope

An AI employee's pending suggestion cards, newest first: edits it proposes to its own instructions (`action`), with how sure it is (`confidence`). A person accepts one on the employee's page; dismissEmployeeSuggestion and commentOnEmployeeSuggestion answer one for them.

## Call

```ts
const result = await client.employees.listEmployeeSuggestions({ employeeId: '<id>' })
// → Promise<ListEmployeeSuggestionsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListEmployeeSuggestionsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `employeeId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesQuery": {
    "contactAgentSuggestions": {
      "id": true,
      "status": true,
      "confidence": true,
      "action": true,
      "createdAt": true,
      "expiresAt": true
    }
  }
}
```
