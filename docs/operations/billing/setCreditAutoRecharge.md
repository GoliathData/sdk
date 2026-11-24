<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setCreditAutoRecharge

mutation · domain `billing` · requires the ADMIN scope

Save one credit type's auto-recharge, as Billing > Credits does: on, it buys `selectedPackCode` (`rechargeAmountCents` its price) on the card on file when the balance falls below `thresholdUnits`, at most `maxBudgetCents` a billing period. Switching it on saves every field: read getCreditAutoRecharge, send the rest unchanged, and take `rechargeAmountCents` from getCreditPrices for the selected pack (refused when it moved); `enabled: false` only switches it off. Org admins only. Every save is asked on its own card that only a tap answers; one that turns it on must name the pack's exact price (`rechargeAmountCents`, getCreditPrices', refused when it moved), the period budget, that a pack is non-refundable, the threshold and the card. Saving may buy a pack at once if the balance is already low.

## Call

```ts
const result = await client.billing.setCreditAutoRecharge({ creditType: <CreditType>, enabled: false, thresholdUnits: 0, rechargeAmountCents: 0, maxBudgetCents: 0 }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetCreditAutoRechargeMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetCreditAutoRechargeMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `creditType` | `CreditType!` | yes | — |
| `enabled` | `Boolean!` | yes | — |
| `thresholdUnits` | `Int!` | yes | — |
| `selectedPackCode` | `String` | no | — |
| `rechargeAmountCents` | `Int!` | yes | — |
| `maxBudgetCents` | `Int!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "orgCreditAutoRechargeMutation": {
    "update": {
      "creditType": true,
      "enabled": true,
      "thresholdUnits": true,
      "selectedPackCode": true,
      "rechargeAmountCents": true,
      "maxBudgetCents": true,
      "spentThisPeriodCents": true
    }
  }
}
```
