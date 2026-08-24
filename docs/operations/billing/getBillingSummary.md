<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getBillingSummary

query · domain `billing` · requires the ADMIN scope

Read the organization's plan, feature limits, and credit balances (skiptrace, email verification, exports). Read-only — never spends.

## Call

```ts
const result = await client.billing.getBillingSummary()
// → Promise<GetBillingSummaryQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetBillingSummaryQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "subscriptionQuery": {
    "getOrganizationBilling": {
      "id": true,
      "planType": true,
      "status": true,
      "isAnnualPlan": true,
      "featureLimits": {
        "seatsCap": true,
        "skiptraceCap": true,
        "emailVerificationCap": true,
        "exportPropertiesCap": true
      },
      "creditLedger": {
        "type": true,
        "unitBalance": true
      }
    }
  }
}
```
