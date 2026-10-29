<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# countPropertySignals

query · domain `properties` · requires the READ scope

Count PUBLIC-RECORD SIGNAL EVENTS in an area, by type and publication-day window. Filings, not contacts: tagged leads are filterContacts. An event is one property's signal of one type on one day (three liens = three); standing conditions (ABSENTEE_OWNER…) are not events, and it is NOT filterProperties' `total`. AREA: a saved `filterId` OR an inline `filterTree` (saveFilter's PROPERTY DSL, strict: `conditions` and `groups`, never `children`): a county is `countyFilters` with its `fips` (searchCounties), a city `cityFilters` with its `id` (searchCities). `signalTypes` narrows (omit for all); `from` / `to` are inclusive `YYYY-MM-DD` days. Returns `totalEvents`, `propertyCount` (distinct properties with a counted event), `byType`, and `uncountedByType` / `uncountedPropertyCount`: properties with a type only from an open recorded filing or listing mark (no day, so no event), which filterProperties finds. Each row is what that type's `byType` misses (rows overlap); `uncountedPropertyCount` counts properties missed entirely. Never call a type absent while `uncountedByType` lists it. `includeIncompleteRecords: true` lifts the completeness gate. Spends nothing.

## Call

```ts
const result = await client.properties.countPropertySignals()
// → Promise<CountPropertySignalsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CountPropertySignalsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `filterId` | `ID` | no | — |
| `filterTree` | `JSON` | no | — |
| `signalTypes` | `[String!]` | no | — |
| `from` | `String` | no | — |
| `to` | `String` | no | — |
| `includeIncompleteRecords` | `Boolean` | no | — |
| `inSavedAreas` | `Boolean` | no | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "filterQuery": {
    "countPropertySignals": {
      "totalEvents": true,
      "propertyCount": true,
      "byType": {
        "signalType": true,
        "events": true,
        "properties": true
      },
      "uncountedByType": {
        "signalType": true,
        "properties": true
      },
      "uncountedPropertyCount": true
    }
  }
}
```
