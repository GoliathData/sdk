<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getCreditsPurchaseUrl

query · domain `billing` · requires the READ scope

The in-app Billing > Credits page URL where a human buys more skiptrace / export / email-verification credits. The agent CANNOT purchase credits itself — when a balance is low (see getBillingSummary), send the user this link to complete checkout.

## Call

```ts
const result = await client.billing.getCreditsPurchaseUrl()
// → Promise<GetCreditsPurchaseUrlQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetCreditsPurchaseUrlQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "billing": {
    "getCreditsPurchaseUrl": true
  }
}
```
