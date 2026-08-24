<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getRelatedProperties

query · domain `properties` · requires the READ scope

Fetch attributes for a batch of properties by id (esId) — beds/baths/size, year built, last sale, estimated value, occupancy. Use the property ids from a search or getProperty.

## Call

```ts
const result = await client.properties.getRelatedProperties({ propertyIds: ['<id>'] })
// → Promise<GetRelatedPropertiesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetRelatedPropertiesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `propertyIds` | `[ID!]!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "property": {
    "fetchRelatedProperties": {
      "propertyId": true,
      "propertyType": true,
      "numberOfBedrooms": true,
      "numberOfBathrooms": true,
      "livingAreaSquareFeet": true,
      "yearBuilt": true,
      "lastSaleDate": true,
      "lastSaleAmount": true,
      "estimatedValueDollars": true,
      "ownerOccupied": true,
      "mlsStatus": true,
      "spicyLeadScore": true
    }
  }
}
```
