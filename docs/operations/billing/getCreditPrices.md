<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getCreditPrices

query · domain `billing` · requires the READ scope

Fixed credit packs for EVERY credit type. Quote `packs` (credit type, code, units, whole-pack price in cents); skip a pack whose `available` is false. AI Agent Credits: 1 credit = 1 cent of AI cost. Texting Credits: 1 credit = 1 outbound text segment; inbound texts are free. No credit pays for mail: the provider bills the org’s own account at rates Goliath cannot see; never quote a price or range. The agent cannot buy: hand over getCreditsPurchaseUrl.

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
