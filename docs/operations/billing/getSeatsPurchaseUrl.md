<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getSeatsPurchaseUrl

query · domain `billing` · requires the READ scope

The in-app Billing page URL where a human buys extra seats (Manage Seats dialog). The agent CANNOT buy seats itself — when the org is at its seat cap, send the user this link. DECIDE "at cap" FROM the `extraSeats.seatsUsed` vs `extraSeats.seatsCap` pair on getBillingSummary, which is TOTAL capacity including seats already purchased. Do NOT use `featureLimits.seatsCap` for this: that is the plan-included seat count only, so an org that has already bought extra seats reads as full and gets told to buy more it does not need. Pair with getAddOnPrices for the per-seat price.

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
