<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setAsideContactSuggestions

mutation · domain `contacts` · requires the WRITE scope

Take cards out of an import's bulk review: they stay pending on each contact's own card. Nothing is decided or spent. Returns setAside and unresolvedIds.

## Call

```ts
const result = await client.contacts.setAsideContactSuggestions({ suggestionIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetAsideContactSuggestionsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetAsideContactSuggestionsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `suggestionIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactSuggestionMutation": {
    "setAsideContactSuggestions": {
      "setAside": true,
      "unresolvedIds": true
    }
  }
}
```
