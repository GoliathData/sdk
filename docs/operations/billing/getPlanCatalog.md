<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getPlanCatalog

query · domain `billing` · requires the READ scope

Every plan on sale: monthly and annual (whole-year) price, and what each includes per month. Quote *Formatted; never divide *Cents. Current plan: getBillingSummary; plans change on Billing & Plans.

## Call

```ts
const result = await client.billing.getPlanCatalog()
// → Promise<GetPlanCatalogQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetPlanCatalogQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "billing": {
    "getPlanPrices": {
      "oneMonthRampPriceCents": true,
      "annualRampPriceCents": true,
      "oneMonthGrowthPriceCents": true,
      "annualGrowthPriceCents": true,
      "oneMonthScalePriceCents": true,
      "annualScalePriceCents": true,
      "oneMonthRampPriceFormatted": true,
      "annualRampPriceFormatted": true,
      "oneMonthGrowthPriceFormatted": true,
      "annualGrowthPriceFormatted": true,
      "oneMonthScalePriceFormatted": true,
      "annualScalePriceFormatted": true
    },
    "getPlanCatalog": {
      "planCode": true,
      "featureLimits": {
        "seatsCap": true,
        "skiptraceCap": true,
        "emailVerificationCap": true,
        "exportPropertiesCap": true,
        "aiCreditsCap": true,
        "smsCreditsCap": true,
        "phoneNumbersCap": true,
        "callingMinutesCap": true
      }
    }
  }
}
```
