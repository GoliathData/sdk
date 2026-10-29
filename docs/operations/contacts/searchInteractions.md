<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# searchInteractions

query · domain `contacts` · requires the READ scope

Contacts by what was SAID on calls, notes, texts or emails. Pass the clues as a sentence; verify each clue in the top ones' history before naming anyone.

## Call

```ts
const result = await client.contacts.searchInteractions({ query: '<text>' })
// → Promise<SearchInteractionsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SearchInteractionsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `query` | `String!` | yes | — |
| `kinds` | `[InteractionKind!]` | no | — |
| `since` | `DateTime` | no | — |
| `contactId` | `ID` | no | — |
| `limit` | `Int` | no | 10 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 10.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "searchInteractions": {
      "contacts": {
        "contactId": true,
        "personName": true,
        "isArchived": true,
        "score": true,
        "matches": {
          "kind": true,
          "occurredAt": true,
          "teammateName": true,
          "snippet": true,
          "sourceGrn": true
        }
      }
    }
  }
}
```
