<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# payInvoice

mutation · domain `billing` · requires the ADMIN scope

Pay one OPEN invoice on the card on file: `number`, and from getInvoicePayment read just before `expectedAmountCents` (its `amountRemainingCents`) and `expectedCardLast4` (its `card.last4`). Its card names the invoice number, the exact dollars, the card ("Visa ending 4242") and that it is non-refundable; only a tap pays. Refused when the amount or the card changed (read again), it is already paid, or no card is on file. `status`: PAID, PENDING (bank debit settling), REQUIRES_ACTION (send `hostedInvoiceUrl`) or DECLINED (`message`; another card goes on the Billing page). Never a staff member acting as the customer. Needs the spending permission.

## Call

```ts
const result = await client.billing.payInvoice({ number: '<text>', expectedAmountCents: 0, expectedCardLast4: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<PayInvoiceMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PayInvoiceMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `number` | `String!` | yes | — |
| `expectedAmountCents` | `Int!` | yes | — |
| `expectedCardLast4` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "billingMutation": {
    "payInvoice": {
      "status": true,
      "invoiceNumber": true,
      "amountCents": true,
      "message": true,
      "hostedInvoiceUrl": true,
      "card": {
        "brand": true,
        "last4": true
      }
    }
  }
}
```
