<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# dismissContactSuggestion

mutation · domain `contacts` · requires the WRITE scope

Dismiss a suggestion card with the reason the person gave (NOT_RELEVANT, WRONG_TONE, WRONG_FACTS, ALREADY_DONE, OTHER, …). Recorded through the API, not as feedback heard from a person.

## Call

```ts
const result = await client.contacts.dismissContactSuggestion({ suggestionId: '<id>', reason: <ContactSuggestionDismissReason> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DismissContactSuggestionMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DismissContactSuggestionMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
  "contactSuggestionMutation": {
    "dismissContactSuggestion": {
      "id": true,
      "status": true
    }
  }
}
```
