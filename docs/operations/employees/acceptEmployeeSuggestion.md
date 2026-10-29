<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# acceptEmployeeSuggestion

mutation · domain `employees` · requires the WRITE scope

Accept one of an AI employee's suggestion cards (listEmployeeSuggestions): its edit lands on the employee's instructions, as the employee page's Accept does. `outcome` APPLIED, RETIRED (the instructions moved on; the card is gone) or REFUSED (`message` says what to fix). Only when the person asks for this card, and it waits for their yes (the write says how to ask).

## Call

```ts
const result = await client.employees.acceptEmployeeSuggestion({ suggestionId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AcceptEmployeeSuggestionMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AcceptEmployeeSuggestionMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `suggestionId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "acceptContactAgentSuggestion": {
      "outcome": true,
      "message": true,
      "suggestion": {
        "id": true,
        "status": true
      }
    }
  }
}
```
