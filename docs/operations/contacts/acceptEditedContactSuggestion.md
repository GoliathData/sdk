<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# acceptEditedContactSuggestion

mutation · domain `contacts` · requires the WRITE scope

Accept a text or email reply card with the person's own words (`text`) in place of the draft; it SENDS. Only when the person asks for THIS card by name, by its suggestionId; when their trust for the card's kind asks first, the write says how to ask. Leave `senderUserId` out: it names a customer reply's sender and is refused on any other card; Ask Goliath sends only as the person. In Ask Goliath `acceptPairedActions` is refused (accept each paired card on its own); over HTTP it also accepts them, and `replyInThread` answers in the email thread.

## Call

```ts
const result = await client.contacts.acceptEditedContactSuggestion({ suggestionId: '<id>', text: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AcceptEditedContactSuggestionMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AcceptEditedContactSuggestionMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `suggestionId` | `ID!` | yes | — |
| `text` | `String!` | yes | — |
| `senderUserId` | `ID` | no | — |
| `replyInThread` | `Boolean` | no | — |
| `acceptPairedActions` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactSuggestionMutation": {
    "acceptEditedContactSuggestion": {
      "id": true,
      "contactId": true,
      "status": true
    }
  }
}
```
