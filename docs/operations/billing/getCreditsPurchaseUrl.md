<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getCreditsPurchaseUrl

query · domain `billing` · requires the READ scope

The in-app Billing > Credits page URL where a person buys credits: send it when a balance is low or the AI paywall is hit and the agent cannot buy (not an admin, no card on file, the bank asked to confirm). An admin's agent buys with buyCreditPacks.

## Call

```ts
const result = await client.billing.getCreditsPurchaseUrl()
// → Promise<GetCreditsPurchaseUrlQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetCreditsPurchaseUrlQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "billing": {
    "getCreditsPurchaseUrl": true
  }
}
```
