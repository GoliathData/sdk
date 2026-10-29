<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# saveFilter

mutation · domain `properties` · requires the WRITE scope

Create a saved filter. `type` CONTACT runs with filterContacts, PROPERTY with filterProperties, DEAL (status, title, pipeline stage, assignees, deal custom fields) with filterDeals — find deal filters with listDealFilters; the Deals board shows no saved-filter list, so tell the user it lives in the API. Other FilterType values are rejected. `root` is the filter-tree DSL, a recursive group: { id, operator: "AND"|"OR", negated?: boolean, conditions: [{ id, fieldId, value }], groups: [<group>] }. `negated: true` inverts a whole GROUP (group-level only) — the way to say "not already on any of my lists". EVERY group and condition needs its own caller-minted non-empty `id` (mint a UUID each); missing ids are the most common rejection. Every `fieldId` must be a real field of the domain: an unknown one, or a bad value, rejects the whole save naming the field and saves nothing, so NEVER probe by saving — read listFilterFields FIRST. Geo conditions take ids: `countyFilters` a `fips` from searchCounties, `cityFilters` a city `id` from searchCities (a county name or unknown FIPS is rejected on any type, a bare city name on PROPERTY). To see what a tree DOES first — its count, whether it keeps records with no value — run it inline as `filterTree` on filterProperties/filterContacts/countContacts, which saves nothing. Save only the final filter the user asked for: a measuring filter is visible to them and their team. File it into a folder with `folderId` (listFilterFolders). Owner + org come from the API key; no userId/organizationId input, so a key cannot plant a filter in another tenant. The response may carry `warnings`: non-fatal notes on the saved criteria (e.g. same-named counties from DIFFERENT states, like Cook, IL + Cook, MN — saved, and it matches all of them). RELAY each one with the result, not as a failure; if the selection is not what the user meant, fix it with updateFilter.

## Call

```ts
const result = await client.properties.saveFilter({ type: <FilterType>, name: '<text>', root: <JSON> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SaveFilterMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SaveFilterMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `type` | `FilterType!` | yes | — |
| `name` | `String!` | yes | — |
| `root` | `JSON!` | yes | — |
| `description` | `String` | no | — |
| `folderId` | `ID` | no | — |
| `isPrivate` | `Boolean` | no | — |
| `isDefault` | `Boolean` | no | — |
| `inSavedAreas` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "filterMutation": {
    "saveFilter": {
      "id": true,
      "name": true,
      "type": true,
      "isPrivate": true,
      "isDefault": true,
      "createdAt": true,
      "warnings": true
    }
  }
}
```
