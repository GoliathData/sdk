<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# findPropertiesByMlsId

query · domain `properties` · requires the READ scope

Search properties by (partial) MLS id. Returns address suggestions with the property id (esId) to use in getProperty.

## Call

```ts
const result = await client.properties.findPropertiesByMlsId({ mlsId: '<text>' })
// → Promise<FindPropertiesByMlsIdQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `FindPropertiesByMlsIdQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `mlsId` | `String!` | yes | — |
| `limit` | `Int` | no | 10 |
| `offset` | `Int` | no | 0 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "property": {
    "autocompletePropertiesByMlsId": {
      "results": {
        "esId": true,
        "fullAddress": true,
        "line1": true,
        "line2": true,
        "city": true,
        "state": true,
        "zipCode": true,
        "parcelId": true,
        "mlsStatus": true
      },
      "totalCount": true,
      "hasMore": true
    }
  }
}
```
