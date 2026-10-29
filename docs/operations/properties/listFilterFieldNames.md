<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listFilterFieldNames

query · domain `properties` · requires the READ scope

The COMPLETE vocabulary of filterable fields for a domain (CONTACT, PROPERTY or DEAL): every fieldId saveFilter accepts, with label, category and UI component. It always arrives whole, unlike the fuller `listFilterFields`, which drops WHOLE FIELDS when unnarrowed, so it is the only trustworthy answer to "is X filterable here?". Find the fieldId here, then call `listFilterFields` with those `fieldIds` for descriptions and value shapes. A field absent from THIS list is genuinely not filterable; never tell a user a filter is impossible from a truncated `listFilterFields` response or a rejected fieldId guess. Static schema introspection: reads no org data.

## Call

```ts
const result = await client.properties.listFilterFieldNames({ type: <FilterType> })
// → Promise<ListFilterFieldNamesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListFilterFieldNamesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `type` | `FilterType!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "filterQuery": {
    "listFilterFields": {
      "fieldId": true,
      "label": true,
      "category": true,
      "component": true
    }
  }
}
```
