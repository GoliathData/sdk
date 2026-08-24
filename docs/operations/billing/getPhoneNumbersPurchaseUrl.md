<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getPhoneNumbersPurchaseUrl

query · domain `billing` · requires the READ scope

The in-app Team & Phones page URL where a human registers and purchases phone numbers (Twilio/Esendex provisioning). The agent CANNOT buy numbers itself — send the user this link to add or register a number.

## Call

```ts
const result = await client.billing.getPhoneNumbersPurchaseUrl()
// → Promise<GetPhoneNumbersPurchaseUrlQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetPhoneNumbersPurchaseUrlQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "billing": {
    "getPhoneNumbersPurchaseUrl": true
  }
}
```
