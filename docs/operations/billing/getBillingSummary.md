<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getBillingSummary

query · domain `billing` · requires the ADMIN scope

Read the organization's plan, subscription lifecycle, seat utilization, feature limits and credit balances. Read-only — never spends. LIFECYCLE: answer "when does our trial end" and "are we set to cancel" from the dates, never from `status` alone — `status: TRIALING` is paired with `trialEnds`, and `cancelAt` is the scheduled cancel-at-period-end (null when nothing is scheduled). A deferred downgrade appears as the `pendingPlanCode` / `pendingPlanIsAnnual` / `pendingPlanEffectiveAt` trio, all null when nothing is pending: until `pendingPlanEffectiveAt` the org is STILL on `planType`, so report the current plan and the change date, not the pending plan as if it were live. `isGrandfathered` means the org holds a legacy price, so `currentUnitAmountCents` (what it actually pays for the core plan) can differ from today's published plan price. SEATS: compare `extraSeats.seatsUsed` against `extraSeats.seatsCap` DIRECTLY — that field is already TOTAL capacity (plan seats + purchased SEATS credits + paid extra seats). Do NOT add `extraSeatQuantity` to it: that quantity is already inside it, and adding it again understates utilization and tells the user they have more room than they do. `extraSeatQuantity` answers a different question — how many seats the org pays extra for. Note `featureLimits.seatsCap` is a DIFFERENT number under the same name: the plan's included seats, excluding add-ons. `extraSeats.unusedPaidSeats` is NULLABLE and null means UNKNOWN (a live Stripe read that did not answer), never zero — say nothing about wasted seats when it is null. CREDITS: `creditLedger` carries one row per credit type, AI_CREDITS included, and `featureLimits.aiCreditsCap` is the plan-included monthly AI allowance. For AI burn and the paywall flag use getAiCreditUsage, which is READ-scoped and answers "why did our AI employee stop working".

## Call

```ts
const result = await client.billing.getBillingSummary()
// → Promise<GetBillingSummaryQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetBillingSummaryQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "subscriptionQuery": {
    "getOrganizationBilling": {
      "id": true,
      "planType": true,
      "status": true,
      "isAnnualPlan": true,
      "isGrandfathered": true,
      "currentUnitAmountCents": true,
      "trialEnds": true,
      "cancelAt": true,
      "pendingPlanCode": true,
      "pendingPlanIsAnnual": true,
      "pendingPlanEffectiveAt": true,
      "featureLimits": {
        "seatsCap": true,
        "skiptraceCap": true,
        "emailVerificationCap": true,
        "exportPropertiesCap": true,
        "aiCreditsCap": true
      },
      "extraSeats": {
        "seatsCap": true,
        "seatsUsed": true,
        "extraSeatQuantity": true,
        "unusedPaidSeats": true,
        "unusedPaidSeatsReleaseAt": true
      },
      "creditLedger": {
        "type": true,
        "unitBalance": true
      }
    }
  }
}
```
