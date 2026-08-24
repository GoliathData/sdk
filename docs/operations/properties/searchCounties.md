<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# searchCounties

query · domain `properties` · requires the READ scope

Find US counties by (partial) name and return each match's `name`, `fullName`, `state` and `fips`. The `countyFilters` condition in a property filter tree takes the 5-digit **`fips`** as its `value` (with `label` set to the display name) — a county DISPLAY NAME is rejected by saveFilter/updateFilter, because the query compiles to a `county_fips` term and a name would match nothing. Include the state in the search term (e.g. "Orange County FL") when a county name is common. The same `fips` is what getZoningCodes takes as `countyFips`.

## Call

```ts
const result = await client.properties.searchCounties({ searchTerm: '<text>' })
// → Promise<SearchCountiesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SearchCountiesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `searchTerm` | `String!` | yes | — |
| `limit` | `Int` | no | 10 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 10.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "geography": {
    "searchCounties": {
      "name": true,
      "fullName": true,
      "state": true,
      "fips": true
    }
  }
}
```
