<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listFilterFieldNames

query · domain `properties` · requires the READ scope

The COMPLETE vocabulary of filterable fields for a domain (CONTACT or PROPERTY) — every fieldId saveFilter accepts, with its label, category and UI component kind, and nothing else. This is the DISCOVERY operation, and the ONLY one whose answer to "is X filterable here?" is trustworthy: it is small enough to always arrive whole, whereas the fuller `listFilterFields` catalog exceeds the tool result budget and comes back with WHOLE FIELDS DROPPED. Use it whenever you are deciding whether a criterion is expressible, answering a user asking what they can filter on, or looking for the fieldId that matches an intent — then call `listFilterFields` with the specific `fieldIds` to get descriptions and value shapes needed to author the condition. NEVER conclude that a field does not exist, or tell a user a filter is impossible, from a truncated `listFilterFields` response or from a rejected fieldId guess: check here first. A field absent from THIS list is genuinely not filterable; that is the only evidence that supports saying so. Static schema introspection: reads no org data and never changes with account state.

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
