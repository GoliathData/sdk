<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# editContactSuggestion

mutation · domain `contacts` · requires the WRITE scope

Rewrite a pending text, email or Slack reply card's words WITHOUT sending it, when the person asks for different words: `text` is the whole new message (start from the card's current words in listContactSuggestions and keep what they did not ask to change; a multi-bubble text's bubbles a blank line apart), `subject` an email's new subject (omit to keep it). The words become the person's own: no AI employee redrafts over them, and the card still waits for someone to send it. Refused for a card no longer waiting, one that is not a message, or a teammate's. Returns the words as saved.

## Call

```ts
const result = await client.contacts.editContactSuggestion({ suggestionId: '<id>', text: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<EditContactSuggestionMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `EditContactSuggestionMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `suggestionId` | `ID!` | yes | — |
| `text` | `String!` | yes | — |
| `subject` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactSuggestionMutation": {
    "editContactSuggestion": {
      "id": true,
      "contactId": true,
      "subject": true,
      "text": true
    }
  }
}
```
