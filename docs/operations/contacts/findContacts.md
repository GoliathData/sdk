<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# findContacts

query · domain `contacts` · requires the READ scope

Fuzzy-search contacts by name, phone, email, or address. A phone may be its last four digits ("0142"). ARCHIVED contacts are included, marked `isArchived` (includeArchived: false drops them): one is still in the workspace, never "not in your contacts"; before a write, ask (a form): restore (unarchiveContacts), write anyway, or skip. Rows are QUALIFYING CANDIDATES, relevance-ranked, not matches: each leg (name, phone, email, address) keeps a row only if it clears a trigram-similarity threshold, and survivors are ranked by match quality, not raw score. So an empty result means nothing cleared the bar, and the top row is "the best that did", not the record you named. One shared word clears it: "Northgate Holdings" with no Northgate returns "McNeil Holdings" as totalCount 1. A single result is not evidence of certainty. Before using a contactId in a WRITE, check personName against the name the user said. If it differs, ask which contact they meant rather than write to the best guess: offer the near match as an ASK_USER_QUESTIONS choice naming that person; if you do write, report the name the write echoes, not the one you searched for (see addContactNote).

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
| `includeArchived` | `Boolean` | no | true |

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
