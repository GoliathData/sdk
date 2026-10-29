<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listContactSuggestions

query · domain `contacts` · requires the READ scope

A contact's pending suggestion cards, newest first: what each proposes (`action`: a text or email reply and its words, a note, a task, a booking, a fix to the record), with how sure it is. dirtyAt set means the conversation moved on since it was written. The ids the suggestion ops below take.

## Call

```ts
const result = await client.contacts.listContactSuggestions({ contactId: '<id>' })
// → Promise<ListContactSuggestionsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListContactSuggestionsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactSuggestionQuery": {
    "contactSuggestions": {
      "id": true,
      "contactId": true,
      "status": true,
      "confidence": true,
      "confidenceReason": true,
      "action": true,
      "createdAt": true,
      "dirtyAt": true,
      "pairedReplyId": true
    }
  }
}
```
