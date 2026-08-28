<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getAiCreditUsage

query · domain `billing` · requires the READ scope

Why the AI employees stopped working. Returns AI-credit burn over a trailing window (optional `windowDays`, clamped 1..90, default 30; the window actually used comes back as `windowDays`), the live `balanceCredits`, and `outOfCredits`. THIS IS THE ONLY OPERATION THAT REPORTS THE AI PAYWALL, so it is the first thing to check for "why did our AI employee stop", "why is nothing happening", or a run that ends immediately. READ THE TWO SIGNALS DIFFERENTLY. `outOfCredits: true` is a CONFIRMED paywall — the org is gated, has real AI usage history, and its balance is at/below zero — report it as the answer. `outOfCredits: false` is NOT proof the agents are running: the flag is deliberately narrower than the predicate that actually refuses work (AiAgentBillingGateService.isOutOfCredits, which AgentSessionEngine and AgentSessionRunExecutor call), because that one omits the usage-history condition. So a gated org with a balance at/below zero and no prior AI usage has its runs REFUSED while this flag still reads false. TREAT `balanceCredits <= 0` AS THE STOP-CONDITION and `outOfCredits` as the confirmation — never tell a user their agents are fine on a false alone when the balance is not positive. `balanceCredits` can be NEGATIVE; that is normal (settlement never wedges), not a data error. 1 credit = 1 cent of AI cost. Read-only — never spends. The agent cannot buy credits: hand the user getCreditsPurchaseUrl.

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
      "outOfCredits": true
    }
  }
}
```
