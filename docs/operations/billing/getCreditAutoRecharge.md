<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getCreditAutoRecharge

query · domain `billing` · requires the READ scope

Auto-recharge per credit type, as Billing > Credits shows it: on or off, the balance that triggers it (`thresholdUnits`), the pack it buys (`selectedPackCode`, `rechargeAmountCents` its price), the period budget and spend, the card on file, and payment-failure pauses. Read-only.

## Call

```ts
const result = await client.billing.getCreditAutoRecharge()
// → Promise<GetCreditAutoRechargeQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetCreditAutoRechargeQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "orgCreditAutoRecharge": {
    "getConfigs": {
      "creditType": true,
      "enabled": true,
      "thresholdUnits": true,
      "selectedPackCode": true,
      "requiresPackSelection": true,
      "rechargeAmountCents": true,
      "maxBudgetCents": true,
      "spentThisPeriodCents": true,
      "currentBalanceUnits": true,
      "hasPaymentMethod": true,
      "paymentMethodBrand": true,
      "paymentMethodLast4": true,
      "periodResetsAt": true,
      "pausedByPaymentFailures": true,
      "paymentFailedRetrying": true
    }
  }
}
```
