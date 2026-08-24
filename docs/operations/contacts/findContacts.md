<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# findContacts

query · domain `contacts` · requires the READ scope

Fuzzy-search contacts by name, phone, email, or address. Use offset to page and includeArchived to include archived contacts. Rows are QUALIFYING CANDIDATES, relevance-ranked — not matches. Each leg (name, phone, email, address) keeps a row only if it clears a trigram-similarity threshold, and the surviving rows are then ordered by intent, match kind, how much of your term they cover, and a score band — not by raw score. So an empty result means nothing cleared the bar, and the top row means "the best thing that did", which is not the same as the record you named. Clearing the bar on one shared word is enough: searching "Northgate Holdings" in a workspace with no Northgate returns "McNeil Holdings", alone, as totalCount 1; "Johnson Investments" returns the contact "Arron Johnson". A single result is the shape most likely to be mistaken for certainty, and is not evidence of one. So before you use a contactId in a WRITE, read personName back and check it against the name the user actually said. If it does not match, ask which contact they meant instead of writing to the best guess — and if you do write, report the name the write echoes rather than the name you searched for (see addContactNote).

## Call

```ts
const result = await client.contacts.findContacts({ searchTerm: '<text>' })
// → Promise<FindContactsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `FindContactsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `searchTerm` | `String!` | yes | — |
| `limit` | `Int` | no | 20 |
| `offset` | `Int` | no | 0 |
| `includeArchived` | `Boolean` | no | false |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "getContactIdentityResults": {
      "results": {
        "contactId": true,
        "personName": true,
        "propertyAddress": true,
        "phoneNumber": true,
        "email": true,
        "isArchived": true
      },
      "totalCount": true,
      "hasMore": true
    }
  }
}
```
