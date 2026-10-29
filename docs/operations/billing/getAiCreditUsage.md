<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getAiCreditUsage

query · domain `billing` · requires the READ scope

Why the AI employees stopped, and what AI use costs: burn over a trailing window (`windowDays` 1..90, default 30), `balanceCredits`, `outOfCredits`, `planAllowance`. THIS IS THE ONLY OPERATION THAT REPORTS THE AI PAYWALL. `outOfCredits: true` is a CONFIRMED paywall. `outOfCredits: false` is NOT proof the agents are running: the flag is deliberately narrower than the predicate that actually refuses work (AiAgentBillingGateService.isOutOfCredits), which omits its usage-history condition. TREAT `balanceCredits <= 0` AS THE STOP-CONDITION and `outOfCredits` as the confirmation. `lowOnCredits` warns (still working); give `lowCreditThresholdCredits`. `balanceCredits` can be NEGATIVE, normally. COST: `creditsConsumed` is window burn, never a bill. `planAllowance` is this period: `usedThisPeriod` of `includedCredits` is in the plan; past it, or in a trial (`lockedDuringTrial`), use draws `purchasedBalance` (bought or granted). 1 credit = 1 cent of AI cost. What used them: `aiCreditUsageBySource`; name causes only from it. To buy: getCreditsPurchaseUrl.

## Call

```ts
const result = await client.billing.getAiCreditUsage()
// → Promise<GetAiCreditUsageQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetAiCreditUsageQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `windowDays` | `Int` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "subscriptionQuery": {
    "aiCreditUsage": {
      "windowDays": true,
      "creditsConsumed": true,
      "balanceCredits": true,
      "outOfCredits": true,
      "lowOnCredits": true,
      "lowCreditThresholdCredits": true,
      "planAllowance": {
        "includedCredits": true,
        "usedThisPeriod": true,
        "includedRemaining": true,
        "purchasedBalance": true,
        "lockedDuringTrial": true,
        "periodResetsAt": true
      }
    },
    "aiCreditUsageBySource": {
      "windowDays": true,
      "sources": {
        "label": true,
        "credits": true
      }
    }
  }
}
```
