<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getInvoicePayment

query · domain `billing` · requires the ADMIN scope

One OPEN invoice by `number` (listInvoices), as the person is asked to pay it: `amountRemainingCents` (what paying charges, cents), `dueAt`, `hostedInvoiceUrl` and the `card` on file (`brand`, `last4`; null: no card, so it cannot be paid here). Null when no open invoice has that number. Read it right before asking. Needs the spending permission.

## Call

```ts
const result = await client.billing.getInvoicePayment({ number: '<text>' })
// → Promise<GetInvoicePaymentQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetInvoicePaymentQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `number` | `String!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "subscriptionQuery": {
    "invoicePayment": {
      "number": true,
      "amountRemainingCents": true,
      "currency": true,
      "dueAt": true,
      "hostedInvoiceUrl": true,
      "card": {
        "brand": true,
        "last4": true
      }
    }
  }
}
```
