<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listMyCoverageRequests

query · domain `properties` · requires the READ scope

The org's coverage requests: signal family and county (countyFips), when asked, status, expectedBy (the promise) and liveSince.

## Call

```ts
const result = await client.properties.listMyCoverageRequests()
// → Promise<ListMyCoverageRequestsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListMyCoverageRequestsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "coverageQuery": {
    "myRequests": {
      "id": true,
      "family": true,
      "countyFips": true,
      "countyName": true,
      "stateAbbr": true,
      "requestedAt": true,
      "status": true,
      "expectedBy": true,
      "pastPromise": true,
      "liveSince": true
    }
  }
}
```
