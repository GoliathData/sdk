<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# findContactsByNote

query · domain `contacts` · requires the READ scope

Find contacts by what their NOTES say — fuzzy free-text search over note bodies, the one contact field findContacts does not reach (it covers name/phone/email/address only). Use it for "who did we write X about" questions: "find every contact whose notes mention probate". Each hit returns the contactId, the person name, `isArchived`, and `noteSnippet` — roughly a 100-character window around the match, NOT the note body; re-read the whole note with getContact (notes[]) or listContactActivities(activityTypes: [NOTE]) before quoting it, and note that the snippet comes from the single best-matching note only. Matching is trigram similarity, not substring: near-misses and different word forms can match, and a term the writer spelled differently can be missed — so a contact absent from these results has not been shown to lack the term. ONE ROW PER CONTACT (the best-scoring note wins), so the result count is a count of contacts, not of notes. THREE LIMITS NARROW WHAT IS SEARCHED, and each one returns an ordinary empty/short result rather than an error, so none of them is visible in the response. (1) RECENCY: only notes written in the LAST YEAR are candidates — an older note mentioning the term is silently invisible here, whatever it says. (2) ELIGIBILITY: the term must be at least 4 alphanumeric characters AND read as free text; a complete email address, a complete phone number, or a parcel/MLS-shaped identifier is classified as that kind of lookup instead and this operation returns NOTHING for it (use findContacts for those). A 3-character term returns an empty list, not an error. (3) VOLUME: at most 500 candidate notes are scanned per archive state and at most 50 contacts are returned, and `limit`/`offset` page WITHIN that capped set. `totalCount` is therefore the size of the capped set (at most 50), not the number of contacts in the organization whose notes mention the term — never quote it as an organization-wide total, and never conclude from `hasMore: false` or an empty result that you have seen every match or that no note mentions the term. An empty result here means "nothing matched within the last year, above the length floor, inside the cap". When the user needs an exhaustive or historical answer, say which of these limits applies and point them at the app’s own search. Archived contacts are excluded unless `includeArchived: true`.

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
