<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# saveFilter

mutation · domain `properties` · requires the WRITE scope

Create a saved filter — type: CONTACT saves a contact filter (use its id with filterContacts), type: PROPERTY a property filter (use with filterProperties); these are the ONLY supported types (other FilterType values the schema advertises are rejected as invalid input). This is the ONE save op for both domains despite being listed under properties. `root` is the advanced filter-tree DSL — a recursive group node: { id, operator: "AND"|"OR", conditions: [{ id, fieldId, value }], groups: [<nested group>] }. EVERY group and condition node requires a caller-minted non-empty `id` string (any unique string works — mint a UUID per node); omitting ids is the most common validation rejection. The `fieldId` of every condition must be a REAL filter field of the domain — an unknown or guessed fieldId (or an invalid value for a known field) rejects the whole save as invalid input naming the field; nothing is saved, so NEVER probe field support by saving. Get valid condition fieldIds (and their value shapes) from listFilterFields FIRST — never guess a fieldId. Geo conditions take ids, not names: `countyFilters` a county `fips` from searchCounties, `cityFilters` a city `id` from searchCities (a county name or unknown FIPS is rejected on any type, a bare city name on PROPERTY). To check what a tree DOES before saving it — how many it matches, whether it includes records with no value for a field — run it inline with filterProperties/filterContacts/countContacts `filterTree`, which executes the tree without persisting anything. Save only the final filter the user asked for; a filter saved to measure something is visible to the user (and to their whole team) and does not belong in their list. Authored by expert callers; treat the DSL as unstable, not a frozen contract. Owner + org are derived from the API key — this operation does NOT accept userId/organizationId, so a key cannot plant a filter in another tenant. The response may carry `warnings` — non-fatal advisories about the saved criteria (e.g. the county selection combines same-named counties from DIFFERENT states, like Cook, IL + Cook, MN: the save succeeded and the filter matches all of them). RELAY any warning to the user with the result — do not drop it, and do not treat it as a failure; if it reveals the selection is not what the user meant, fix the filter with updateFilter.

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
