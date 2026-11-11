<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listInvoices

query · domain `billing` · requires the ADMIN scope

The org's invoice history, newest first: `count` (1..24, default 12) finalized invoices, never drafts. Each has `number`, `status` (open, paid, uncollectible, void), `createdAt`, `dueAt` (an emailed invoice's due date, kept after payment, so read `status`), `totalCents`, `amountPaidCents`, `amountRemainingCents` (still owed), `currency` and `hostedInvoiceUrl`, the page where a person views, downloads or pays it; link it, never paste amounts as a receipt. Amounts are cents: divide by 100. An empty list means no finalized invoice among the org's recent Stripe invoices, not proof it was never billed. Read-only; the agent cannot pay. Needs the spending permission: refused without it (the refusal text is the generic spending one), tell the person an admin or a teammate who manages spending sees invoices on Settings > Billing.

## Call

```ts
const result = await client.billing.listInvoices()
// → Promise<ListInvoicesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListInvoicesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `count` | `Int` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "subscriptionQuery": {
    "invoices": {
      "id": true,
      "number": true,
      "status": true,
      "createdAt": true,
      "dueAt": true,
      "totalCents": true,
      "amountPaidCents": true,
      "amountRemainingCents": true,
      "currency": true,
      "hostedInvoiceUrl": true
    }
  }
}
```
