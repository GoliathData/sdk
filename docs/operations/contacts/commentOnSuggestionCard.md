<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# commentOnSuggestionCard

mutation · domain `contacts` · requires the WRITE scope

Comment on a suggestion card ("too pushy"). Nothing on the card changes and nothing is sent; the employee reads it when it drafts its next card. submissionKey: a new one per comment (1 to 100 characters), resent unchanged on a retry.

## Call

```ts
const result = await client.contacts.commentOnSuggestionCard({ suggestionId: '<id>', comment: '<text>', submissionKey: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CommentOnSuggestionCardMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CommentOnSuggestionCardMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
  "contactSuggestionMutation": {
    "commentOnSuggestionCard": {
      "heard": true,
      "routedToSession": true,
      "replyChanged": true
    }
  }
}
```
