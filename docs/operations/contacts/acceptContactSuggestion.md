<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# acceptContactSuggestion

mutation · domain `contacts` · requires the WRITE scope

Accept a contact's suggestion card as written: a reply card SENDS its text or email to the contact; another card applies its action. Only when the person asks for THIS card by name, by its suggestionId; when their trust for the card's kind asks first, the write says how to ask. Leave `senderUserId` out: it names a customer reply's sender and is refused on any other card; Ask Goliath sends only as the person. In Ask Goliath `acceptPairedActions` is refused (accept each paired card on its own); over HTTP it also accepts them, and `replyInThread` answers in the email thread.

## Call

```ts
const result = await client.contacts.acceptContactSuggestion({ suggestionId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AcceptContactSuggestionMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AcceptContactSuggestionMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `suggestionId` | `ID!` | yes | — |
| `senderUserId` | `ID` | no | — |
| `replyInThread` | `Boolean` | no | — |
| `acceptPairedActions` | `Boolean` | no | — |
| `acknowledgedWarning` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactSuggestionMutation": {
    "acceptContactSuggestion": {
      "id": true,
      "contactId": true,
      "status": true
    }
  }
}
```
