<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getCreditUsageByType

query · domain `billing` · requires the ADMIN scope

What used the credits this billing period, per credit type: `series[].totalUnits` for AI_CREDITS, SMS_CREDITS (outbound text segments), CALLING_MINUTES, SKIPTRACE, EMAIL_VERIFICATION and EXPORT_PROPERTIES, the Billing page usage chart's own figures (each day's use, charges less that day's refunds, summed). Pass timeZone (getMyProfile.resolvedTimezone) so the days fall as the person's chart draws them; omitted, they are UTC days. A refund that lands a day after its charge is not netted, so a total can exceed getBillingSummary's `planUsage.usedThisPeriod`; quote this one as what used the credits, that one as what is left. Null before a first billing period. AI use is not split further (no per-employee figure). Read-only. Admin only: a Member is told a workspace admin sees it.

## Call

```ts
const result = await client.billing.getCreditUsageByType()
// → Promise<GetCreditUsageByTypeQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetCreditUsageByTypeQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `timeZone` | `String` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "subscriptionQuery": {
    "dailyCreditUsage": {
      "periodStart": true,
      "periodEnd": true,
      "series": {
        "creditType": true,
        "totalUnits": true
      }
    }
  }
}
```
