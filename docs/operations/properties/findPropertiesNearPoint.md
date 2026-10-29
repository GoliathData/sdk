<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# findPropertiesNearPoint

query · domain `properties` · requires the READ scope

Properties within ~150 m of a point, the parcel it is on first: candidates, not one answer (match a house number).

## Call

```ts
const result = await client.properties.findPropertiesNearPoint({ latitude: 0, longitude: 0 })
// → Promise<FindPropertiesNearPointQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `FindPropertiesNearPointQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `latitude` | `Float!` | yes | — |
| `longitude` | `Float!` | yes | — |
| `limit` | `Int` | no | 5 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 10.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "property": {
    "fetchPropertiesNearPoint": {
      "propertyId": true,
      "line1": true,
      "city": true,
      "nameOnDeedUnformatted": true,
      "estimatedValueDollars": true
    }
  }
}
```
