<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getSeatsPurchaseUrl

query · domain `billing` · requires the READ scope

The in-app Billing page URL where a human buys extra seats. The agent cannot buy. Decide "at cap" from getBillingSummary's `extraSeats.seatsUsed` vs `extraSeats.seatsCap` (total, purchased seats included), never the plan-only `featureLimits.seatsCap`. Price: getAddOnPrices.

## Call

```ts
const result = await client.billing.getSeatsPurchaseUrl()
// → Promise<GetSeatsPurchaseUrlQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetSeatsPurchaseUrlQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "billing": {
    "getSeatsPurchaseUrl": true
  }
}
```
