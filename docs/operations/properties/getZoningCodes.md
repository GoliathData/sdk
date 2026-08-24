<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getZoningCodes

query · domain `properties` · requires the READ scope

List the zoning codes available for a location (by state + city id or county FIPS). Returns a plain list of zoning-code strings.

## Call

```ts
const result = await client.properties.getZoningCodes()
// → Promise<GetZoningCodesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetZoningCodesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `state` | `StateEnum` | no | — |
| `cityId` | `String` | no | — |
| `countyFips` | `String` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "property": {
    "getZoningCodesByLocation": true
  }
}
```
