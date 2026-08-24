<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# searchCities

query · domain `properties` · requires the READ scope

Find US cities by (partial) name and return each match's `id`, `name` and `state`. This is how you IDENTIFY a city: the `cityFilters` condition in a property filter tree takes the returned `id` as its `value` (with `label` set to "Name, ST", e.g. "Memphis, TN"), and saveFilter/updateFilter REJECT a bare city name on PROPERTY filters (CONTACT matches a name leniently) — a name alone is ambiguous across states (11,347 US city names occur in more than one state), so a filter built from one would match nothing. Disambiguate by including the state in the search term (e.g. "Memphis TN") when a name is common. The same `id` is also what getZoningCodes takes as `cityId`.

## Call

```ts
const result = await client.properties.searchCities({ searchTerm: '<text>' })
// → Promise<SearchCitiesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SearchCitiesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "searchCities": {
      "id": true,
      "name": true,
      "state": true
    }
  }
}
```
