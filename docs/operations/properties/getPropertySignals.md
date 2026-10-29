<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getPropertySignals

query · domain `properties` · requires the READ scope

A property's filings (newest 50), notice text in `adBody`. OWNER_SEARCH / MAILING_ADDRESS: matched via the owner. `suppressedReason` set: not live.

## Call

```ts
const result = await client.properties.getPropertySignals({ propertyId: '<id>' })
// → Promise<GetPropertySignalsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetPropertySignalsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
      "propertySignals": {
        "id": true,
        "signalType": true,
        "signalTypes": true,
        "publicationDate": true,
        "adBody": true,
        "attachmentMatchStrategy": true,
        "suppressedReason": true
      }
    }
  }
}
```
