<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getProperty

query · domain `properties` · requires the READ scope

Fetch one property by id — address, skip-trace status, and signal recency.

## Call

```ts
const result = await client.properties.getProperty({ propertyId: '<id>' })
// → Promise<GetPropertyQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetPropertyQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `propertyId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "property": {
    "fetchProperty": {
      "id": true,
      "address": {
        "line1": true,
        "line2": true,
        "city": true,
        "state": true,
        "zip": true,
        "countyName": true,
        "addressFull": true
      },
      "skipTraceStatus": true,
      "lastSkiptracedAt": true,
      "isStaleSkiptrace": true,
      "lastPropertySignalDate": true,
      "spicyLeadScore": true
    }
  }
}
```
