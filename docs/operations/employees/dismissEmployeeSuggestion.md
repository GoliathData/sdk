<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# dismissEmployeeSuggestion

mutation · domain `employees` · requires the WRITE scope

Dismiss one of an AI employee's suggestion cards (listEmployeeSuggestions) with a reason (NOT_RELEVANT, WRONG_TONE, WRONG_FACTS, ALREADY_DONE or OTHER). Recorded as dismissed through the API, not as feedback heard from a person. Only when the person says to, with the reason they gave.

## Call

```ts
const result = await client.employees.dismissEmployeeSuggestion({ suggestionId: '<id>', reason: <ContactSuggestionDismissReason> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DismissEmployeeSuggestionMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DismissEmployeeSuggestionMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `suggestionId` | `ID!` | yes | — |
| `reason` | `ContactSuggestionDismissReason!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "dismissContactAgentSuggestion": {
      "id": true,
      "status": true
    }
  }
}
```
