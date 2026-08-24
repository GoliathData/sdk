<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getSeatsPurchaseUrl

query · domain `billing` · requires the READ scope

The in-app Billing page URL where a human buys extra seats (Manage Seats dialog). The agent CANNOT buy seats itself — when the org is at its seat cap (see getBillingSummary featureLimits.seatsCap), send the user this link. Pair with getAddOnPrices for the per-seat price.

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
