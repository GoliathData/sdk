<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# filterProperties

query · domain `properties` · requires the READ scope

Run a property filter and paginate the matches with limit/offset. Returns a page of properties plus total and hasMore. Pass EITHER filterId (a saved filter from listPropertyFilters) OR filterTree (the same filter-tree DSL saveFilter takes) to run an UNSAVED tree — same execution path, same totals, nothing persisted. The filterTree form is how you verify a filter before creating it, and how you settle what a condition actually does: fetch a record that has no value for the field and check whether the tree returns it. NEVER save a filter in order to measure one — save only the final filter the user asked for.

## Call

```ts
const result = await client.properties.filterProperties()
// → Promise<FilterPropertiesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `FilterPropertiesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `filterId` | `ID` | no | — |
| `filterTree` | `JSON` | no | — |
| `limit` | `Int` | no | 25 |
| `offset` | `Int` | no | 0 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 100.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "filterQuery": {
    "applyPropertyFilter": {
      "items": {
        "id": true,
        "address": {
          "line1": true,
          "line2": true,
          "city": true,
          "state": true,
          "zip": true,
          "countyName": true,
          "addressFull": true
        },
        "skipTraceStatus": true,
        "lastSkiptracedAt": true,
        "isStaleSkiptrace": true,
        "lastPropertySignalDate": true,
        "spicyLeadScore": true
      },
      "pagination": {
        "total": true,
        "hasMore": true
      }
    }
  }
}
```
