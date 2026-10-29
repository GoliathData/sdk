<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# runPropertyComparables

mutation · domain `properties` · requires the WRITE scope

Comparable sales for a property (its id from a property read), as the property page's Comps tab: each comp's facts, distance and price per square foot, and the medians with the subject's implied value. Optional criteria narrow it (every bound is required when sent). Spends nothing.

## Call

```ts
const result = await client.properties.runPropertyComparables({ propertyId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RunPropertyComparablesMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RunPropertyComparablesMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `propertyId` | `ID!` | yes | — |
| `criteria` | `PropertyComparablesCriteriaInput` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "propertyMutation": {
    "runPropertyComparables": {
      "comparables": {
        "propertyId": true,
        "address": {
          "line1": true,
          "city": true,
          "state": true,
          "zip": true
        },
        "beds": true,
        "baths": true,
        "livingSquareFeet": true,
        "yearBuilt": true,
        "lastSoldDate": true,
        "lastSoldPrice": true,
        "isOnMarketComp": true,
        "listPrice": true,
        "distanceMiles": true,
        "pricePerSquareFoot": true
      },
      "analytics": {
        "compCount": true,
        "medianLastSoldPrice": true,
        "medianPricePerSquareFoot": true,
        "medianDistanceMiles": true,
        "subjectImpliedValueFromMedianPricePerSquareFoot": true
      },
      "generatedAt": true
    }
  }
}
```
