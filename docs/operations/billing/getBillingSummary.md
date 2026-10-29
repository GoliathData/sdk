<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getBillingSummary

query · domain `billing` · requires the ADMIN scope

Read the organization's plan, subscription lifecycle, seat utilization, feature limits and credit balances. Read-only. LIFECYCLE: answer "when does our trial end" and "are we set to cancel" from the dates, never from `status` alone — `status: TRIALING` is paired with `trialEnds`, and `cancelAt` is the scheduled cancel-at-period-end (null when nothing is scheduled). A deferred downgrade is the `pendingPlanCode` / `pendingPlanIsAnnual` / `pendingPlanEffectiveAt` trio (null when none): until `pendingPlanEffectiveAt` the org is STILL on `planType`, so report the current plan and the change date. `isGrandfathered`: a legacy price, so `currentUnitAmountCents` (the core plan) can differ from the published one. SEATS: compare `extraSeats.seatsUsed` against `extraSeats.seatsCap` DIRECTLY, which is already TOTAL capacity; never add `extraSeatQuantity` (the seats paid extra for, already inside it). Open seats = it − `seatsUsed` − live non-permanent invites (listTeamInvites `isAlive`, not `isPermanent`), min 0. `featureLimits.seatsCap` is a DIFFERENT number: plan-included seats only. `extraSeats.unusedPaidSeats` null means UNKNOWN, never zero. CREDITS: `creditLedger.unitBalance` is only the PURCHASED balance, so 0 there is not "none left". For what is left read `planUsage`, one row per credit type (AI_CREDITS and SMS_CREDITS included): plan `planCap`, `usedThisPeriod`, `planRemaining`, `purchasedBalance`, and `available` (spendable now; quote it), `periodResetsAt`, `planCreditsLocked` (only purchased credits spend). Before a skip trace, export or verification: checkBillingAction. 1 SMS credit = 1 outbound text segment; inbound is free. AI burn, sources, paywall: getAiCreditUsage (READ).

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
        "aiCreditsCap": true,
        "smsCreditsCap": true,
        "phoneNumbersCap": true,
        "callingMinutesCap": true
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
      },
      "planUsage": {
        "type": true,
        "planCap": true,
        "usedThisPeriod": true,
        "planRemaining": true,
        "planCreditsLocked": true,
        "purchasedBalance": true,
        "available": true,
        "periodResetsAt": true
      }
    }
  }
}
```
