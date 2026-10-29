<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# commentOnEmployeeSuggestion

mutation · domain `employees` · requires the WRITE scope

Comment on one of an AI employee's suggestion cards ("keep the opener shorter"). It changes nothing on the card; the employee reads it when it writes its next cards, recorded as a comment through the API, not as feedback heard from a person. Only when the person asks, passing on what they said. `heard` is false while the organization's memory is off. `submissionKey` is REQUIRED: a new one (1 to 100 characters, e.g. a UUID) per comment, sent again unchanged on a retry, so a retried call is heard once.

## Call

```ts
const result = await client.employees.commentOnEmployeeSuggestion({ suggestionId: '<id>', comment: '<text>', submissionKey: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CommentOnEmployeeSuggestionMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CommentOnEmployeeSuggestionMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `suggestionId` | `ID!` | yes | — |
| `comment` | `String!` | yes | — |
| `submissionKey` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "commentOnContactAgentSuggestion": {
      "heard": true
    }
  }
}
```
