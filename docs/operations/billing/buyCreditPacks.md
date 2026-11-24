<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# buyCreditPacks

mutation · domain `billing` · requires the ADMIN scope

Buy credit packs now on the card on file, as the Billing page does: one `{ creditType, packCode }` per credit type from getCreditPrices; `expectedAmountCents` is their summed `priceCents`, refused when it moved. `attemptKey` is new per purchase (8-128 of letters, digits, - or _), reused only to retry it. It never turns auto-recharge on: that is setCreditAutoRecharge, on its own card. Org admins only, on its own card naming the packs, the exact total, that it is non-refundable, and the card (getCreditAutoRecharge). `status`: PAID, PENDING (bank debit clearing), DECLINED (`message`), REQUIRES_ACTION (send getCreditsPurchaseUrl), NOTHING_DUE.

## Call

```ts
const result = await client.billing.buyCreditPacks({ items: [<CreditPackPurchaseItemInput>], attemptKey: '<text>', expectedAmountCents: 0 }, { idempotencyKey: crypto.randomUUID() })
// → Promise<BuyCreditPacksMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `BuyCreditPacksMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `items` | `[CreditPackPurchaseItemInput!]!` | yes | — |
| `attemptKey` | `String!` | yes | — |
| `expectedAmountCents` | `Int!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "billingMutation": {
    "buyCreditPacks": {
      "status": true,
      "amountCents": true,
      "message": true
    }
  }
}
```
