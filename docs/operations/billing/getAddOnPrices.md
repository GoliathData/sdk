<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getAddOnPrices

query · domain `billing` · requires the READ scope

Get current add-on prices (cents per unit) — the monthly price of one extra seat. Live from Stripe. Pair with getSeatsPurchaseUrl: quote the price, then hand the human the link; the agent never spends.

## Call

```ts
const result = await client.billing.getAddOnPrices()
// → Promise<GetAddOnPricesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetAddOnPricesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "billing": {
    "getAddOnPrices": {
      "extraSeatPriceCents": true
    }
  }
}
```
