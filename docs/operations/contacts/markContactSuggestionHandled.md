<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# markContactSuggestionHandled

mutation · domain `contacts` · requires the WRITE scope

Close a card the person already handled themselves (they sent the text, made the task): it is marked done WITHOUT running its action, and the reply's paired cards stay pending.

## Call

```ts
const result = await client.contacts.markContactSuggestionHandled({ suggestionId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<MarkContactSuggestionHandledMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `MarkContactSuggestionHandledMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
  "contactSuggestionMutation": {
    "resolveContactSuggestionAsHandled": {
      "id": true,
      "status": true
    }
  }
}
```
