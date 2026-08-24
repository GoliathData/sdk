<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# searchContactTags

query · domain `contacts` · requires the READ scope

Search the organization-wide contact tags and lists by name. The response splits them: `tags` are free-form TAGS, `lists` are LISTS (segments) — they are different things and the operations that take them do not accept each other’s ids. A tag id feeds updateContact’s addTagIds/removeTagIds (one contact) or addContactTags/removeContactTags (a selection), and renameContactTag/deleteContactTags maintain the tag itself. A list id feeds updateContact’s addToListIds/removeFromListIds or addContactsToList/removeContactsFromList, and renameContactList/deleteContactLists maintain the list.

## Call

```ts
const result = await client.contacts.searchContactTags({ searchTerm: '<text>' })
// → Promise<SearchContactTagsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SearchContactTagsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `searchTerm` | `String!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "searchContactTags": {
      "tags": {
        "id": true,
        "name": true,
        "folderId": true
      },
      "lists": {
        "id": true,
        "name": true,
        "folderId": true
      }
    }
  }
}
```
