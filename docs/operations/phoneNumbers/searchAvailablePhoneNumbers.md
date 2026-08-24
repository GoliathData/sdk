<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# searchAvailablePhoneNumbers

query · domain `phoneNumbers` · requires the READ scope

Search Twilio for buyable phone numbers, optionally narrowed by areaCode (a 3-digit US area code). Returns candidate numbers (E.164 phoneNumber plus locality/region) to feed into provisionPhoneNumber. Call this first when the org has no line to send from (listCommunicationChannels returned an empty twilioPhoneNumbers).

## Call

```ts
const result = await client.phoneNumbers.searchAvailablePhoneNumbers()
// → Promise<SearchAvailablePhoneNumbersQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SearchAvailablePhoneNumbersQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `areaCode` | `Int` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "twilioQuery": {
    "searchAvailablePhoneNumbers": {
      "phoneNumber": true,
      "friendlyName": true,
      "locality": true,
      "region": true,
      "postalCode": true
    }
  }
}
```
