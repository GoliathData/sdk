<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listFilterFields

query · domain `properties` · requires the READ scope

The filterable-field catalog for a filter domain WITH full value shapes — how to WRITE a condition once you know which field you want (CONTACT or PROPERTY; other FilterType values are rejected). Call this BEFORE authoring a saveFilter tree: never guess fieldIds. `fieldIds` is REQUIRED — name the fields you actually need. It is required because the unnarrowed catalog exceeds the result budget and is TRUNCATED BY DROPPING WHOLE FIELDS, which makes a missing field indistinguishable from a nonexistent one; this operation therefore cannot be used to find out WHETHER a field exists, only how to write a condition for one you can already name. THIS OPERATION IS NEVER EVIDENCE OF ABSENCE. To discover what exists — or to answer a user asking what is filterable, or before telling anyone a filter cannot express something — call `listFilterFieldNames`, which always arrives complete. An unknown requested fieldId errors naming it (it means that field does NOT exist; do not invent a value shape for it). Each row carries label/category/description, the UI component kind (the value-shape hint — e.g. numericRange, multiSelect, dateRange), acceptedValueKeys (for object-shaped values: the exact top-level keys, e.g. min/max), and static options for select-like fields. USE `valueShapes`, NOT `acceptedValueKeys`, WHENEVER A FIELD HAS MORE THAN ONE: some fields accept several mutually-exclusive value shapes, and acceptedValueKeys flattens them into one list that is NOT itself a valid value. `valueShapes` reports them arm by arm — each with the `discriminatorKey`/`discriminatorValue` literal that selects it, and only that arm’s keys, each marked required or optional with its `acceptedValues` when the key is an enum or literal. A shape carrying `scalar` instead of keys is a BARE value — `bedrooms` accepts `3` as well as `{min, max}` — so send the plain value for that arm, not an object. Pick ONE shape, send that arm’s discriminator literal verbatim, and send only its keys: `dateCustomFieldFilters`, for instance, has seven arms keyed on `comparison`; ON, BEFORE and AFTER take a strict YYYY-MM-DD `date`, MORE_THAN, LESS_THAN and WITHIN_NEXT take number+timeUnit (an interval), and BETWEEN takes from/to (absolute bounds). Both halves of a mismatch hurt: an unrecognized `comparison` literal fails the WHOLE save, and keys borrowed from another arm are STRIPPED rather than rejected — the filter saves and then silently matches without the constraint you asked for. Contact CUSTOM fields are NOT addressed by their custom-field UUID as a fieldId — use the wrapper fields this catalog lists (e.g. dropdownCustomFieldFilters / textCustomFieldFilters) whose VALUE carries the custom-field id. `countyFilters` takes a county `fips` (searchCounties), `cityFilters` a city `id` (searchCities). Static schema introspection: reads no org data and never changes with account state.

## Call

```ts
const result = await client.properties.listFilterFields({ type: <FilterType>, fieldIds: ['<text>'] })
// → Promise<ListFilterFieldsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListFilterFieldsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `type` | `FilterType!` | yes | — |
| `fieldIds` | `[String!]!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "filterQuery": {
    "listFilterFields": {
      "fieldId": true,
      "label": true,
      "category": true,
      "description": true,
      "component": true,
      "acceptedValueKeys": true,
      "valueShapes": {
        "discriminatorKey": true,
        "discriminatorValue": true,
        "scalar": {
          "type": true,
          "acceptedValues": true
        },
        "keys": {
          "key": true,
          "required": true,
          "acceptedValues": true
        }
      },
      "options": {
        "label": true,
        "value": true
      },
      "hidden": true,
      "retired": true
    }
  }
}
```
