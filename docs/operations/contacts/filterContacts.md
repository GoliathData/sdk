<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# filterContacts

query · domain `contacts` · requires the READ scope

Run a contact filter and paginate the matches with limit/offset. Returns a page of contacts plus total and hasMore. Pass EITHER filterId (a saved filter from listContactFilters) OR filterTree (the same filter-tree DSL saveFilter takes) to run an UNSAVED tree — same execution path, same totals, nothing persisted. The filterTree form is how you verify a filter before creating it, and how you settle what a condition actually does: fetch a record that has no value for the field and check whether the tree returns it. NEVER save a filter in order to measure one — save only the final filter the user asked for. Optionally sort with sort: { field, direction } — field is one of SELLER_INTENT_SCORE, LAST_COMMUNICATION, LAST_ACTIVITY, MY_LAST_CALL, MY_LAST_TEXT, LAST_UPDATED, CREATED_AT, TASK_HIGHLIGHT; direction ASC or DESC.

## Call

```ts
const result = await client.contacts.filterContacts()
// → Promise<FilterContactsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `FilterContactsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `filterId` | `ID` | no | — |
| `filterTree` | `JSON` | no | — |
| `limit` | `Int` | no | 25 |
| `offset` | `Int` | no | 0 |
| `sort` | `Sort` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 100.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "paginateContacts": {
      "items": {
        "id": true,
        "name": true,
        "sellerIntentScore": true,
        "isArchived": true,
        "tags": {
          "id": true,
          "name": true
        }
      },
      "pagination": {
        "total": true,
        "hasMore": true
      }
    }
  }
}
```
