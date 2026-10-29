<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# findContactsByNote

query · domain `contacts` · requires the READ scope

Contacts by what their NOTES say; for calls, texts and emails too, use searchInteractions. One row per contact with a ~100-char noteSnippet, not the body. Silent limits: notes from the LAST YEAR; 4+ characters of free text (not an email, phone or parcel id: use findContacts); at most 50 contacts from 500 candidate notes, so totalCount is that capped set and empty proves nothing.

## Call

```ts
const result = await client.contacts.findContactsByNote({ searchTerm: '<text>' })
// → Promise<FindContactsByNoteQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `FindContactsByNoteQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "getContactNoteResults": {
      "results": {
        "contactId": true,
        "personName": true,
        "noteSnippet": true,
        "isArchived": true
      },
      "totalCount": true,
      "hasMore": true
    }
  }
}
```
