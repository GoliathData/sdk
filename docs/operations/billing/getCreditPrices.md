<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getCreditPrices

query · domain `billing` · requires the READ scope

Get the current fixed credit packs for EVERY credit type an org can hold. `packs` is the sellable catalog: each row has its credit type, code, units, whole-pack price in cents, and `available` (false means its Stripe Price is unavailable or mismatched, so do not quote or offer it). Use packs—not the legacy per-credit fields—to tell a user what a top-up costs. The legacy fields remain for compatibility and do not describe sellable prices. AI Agent Credits consume at 1 credit = 1 cent of AI cost; Texting Credits consume at 1 credit = 1 outbound carrier text segment; inbound texts never consume texting credits. The agent cannot buy credits; direct the user to getCreditsPurchaseUrl.

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
      "emailVerificationPriceCents": true,
      "aiAgentCreditPriceCents": true,
      "smsCreditPriceCents": true,
      "packs": {
        "creditType": true,
        "code": true,
        "units": true,
        "priceCents": true,
        "available": true
      }
    }
  }
}
```
