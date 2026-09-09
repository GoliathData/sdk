<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# filterProperties

query · domain `properties` · requires the READ scope

Run a property filter and paginate the matches with limit/offset. Returns a page of properties plus total and hasMore. Pass EITHER filterId (a saved filter from listPropertyFilters) OR filterTree (the same filter-tree DSL saveFilter takes) to run an UNSAVED tree — same execution path, same totals, nothing persisted. The filterTree form is how you verify a filter before creating it, and how you settle what a condition actually does: fetch a record that has no value for the field and check whether the tree returns it. NEVER save a filter in order to measure one — save only the final filter the user asked for. Sort with `sort: { field, direction }` (`ASC` / `DESC`). `field` is a CLOSED vocabulary: `spicy_lead_score`, `estimated_value_dollars`, `last_property_signal_date` / `lastPropertySignalDate`, `closed_date` / `closedDate`, `unit_count` / `unitCount`, `latestListingStatusDate` / `z_latest_listing_status_date`, `fsboListedDate`, `frboListedDate`, `fsboListingRemovedDate`, `frboListingRemovedDate`, `listingRemovedDate`, `listingRemovedRentDate`, `listingRemovedSaleDate`. Any other field is silently IGNORED (default order, no error), so never infer support from a call that worked. `includeIncompleteRecords: true` lifts the index's completeness gate: by default properties with no parcel identity and no signal (~39% of the index) are HIDDEN, the usual reason a known address is missing. It only widens. Pass the same flag to addPropertiesToList so the bulk selection matches the page shown.

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
| `sort` | `Sort` | no | — |
| `includeIncompleteRecords` | `Boolean` | no | — |

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
