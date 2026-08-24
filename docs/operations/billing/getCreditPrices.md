<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getCreditPrices

query · domain `billing` · requires the READ scope

Get current per-credit prices (cents per unit) for skiptrace, property export, and email verification. Live from Stripe. Pair with getBillingSummary to tell the user what topping up costs — the agent cannot buy credits; direct the user to getCreditsPurchaseUrl.

## Call

```ts
const result = await client.billing.getCreditPrices()
// → Promise<GetCreditPricesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetCreditPricesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "billing": {
    "getCreditPrices": {
      "skiptracePriceCents": true,
      "exportPropertiesPriceCents": true,
      "emailVerificationPriceCents": true
    }
  }
}
```
