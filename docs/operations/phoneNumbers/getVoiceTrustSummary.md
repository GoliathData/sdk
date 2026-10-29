<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getVoiceTrustSummary

query · domain `phoneNumbers` · requires the READ scope

One org-wide picture of caller-trust registration — the carrier registration that keeps outbound calls from showing as "Spam Likely". accountState is chosen by loudest call to action, not by progress (FAILED > REGISTERING > REGISTERED > SELF_MANAGED > NOT_ELIGIBLE), so one refused account reads FAILED even when another is done. The line counts split the org's numbers by registration (registered / registering / failed, summing to eligibleLineCount) and by carrier health (watch / atRisk). needsAttention is the only flag that means "a human must act now" — a refused account or a number carriers appear to be rejecting; failedLineCount alone does not raise it, because a single errored attempt is retried by the next sweep. Read-only: registration runs on its own schedule and there is nothing to submit through this API.

## Call

```ts
const result = await client.phoneNumbers.getVoiceTrustSummary()
// → Promise<GetVoiceTrustSummaryQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetVoiceTrustSummaryQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "voiceTrustQuery": {
    "summary": {
      "accountState": true,
      "eligibleLineCount": true,
      "registeredLineCount": true,
      "registeringLineCount": true,
      "failedLineCount": true,
      "watchLineCount": true,
      "atRiskLineCount": true,
      "needsAttention": true
    }
  }
}
```
