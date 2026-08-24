<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getPropertyOwners

query · domain `properties` · requires the READ scope

Fetch a property's known people — owners and relatives assembled from deed records and public-record signals, merged with your organization's skip-trace results when it has run skipTraceProperty on the property. Names can appear without a trace (they come from public records); phone numbers (incl. DNC status) and emails are generally populated only by a prior skip trace. Reading NEVER consumes a credit.

## Call

```ts
const result = await client.properties.getPropertyOwners({ propertyId: '<id>' })
// → Promise<GetPropertyOwnersQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetPropertyOwnersQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
        "addressFull": true
      },
      "skipTraceStatus": true,
      "lastSkiptracedAt": true,
      "isStaleSkiptrace": true,
      "people": {
        "id": true,
        "firstName": true,
        "middleName": true,
        "lastName": true,
        "suffix": true,
        "age": true,
        "phoneNumbers": {
          "number": true,
          "type": true,
          "ranking": true,
          "dncStatus": {
            "isDnc": true,
            "isLitigator": true
          }
        },
        "emails": {
          "email": true,
          "ranking": true
        },
        "isRelative": true,
        "relativeIds": true,
        "ranking": true,
        "deceased": true,
        "isNameOnDeed": true
      }
    }
  }
}
```
