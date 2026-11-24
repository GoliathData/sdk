<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getPlatformStatus

query · domain `deliveryHealth` · requires the READ scope

Whether texting is slow for everyone right now, not just this organization, as one aggregate over every organization (refreshed at most once a minute): of the texts the carrier accepted in the last 15 minutes that record when, how many and the p50 and p95 seconds from a text being created to the carrier accepting it (all three null when fewer than 20, so no one organization shows), and of the texts created in the last 6 hours, how many still wait to go out and the 95th-percentile seconds they have waited (both null when fewer than 20; a stalled send queue shows here). Names and counts no organization. Email has no queue to measure (a send goes straight to the mailbox provider), and no provider incident is recorded, so neither is here. Compare with listFailedTexts before blaming the carrier.

## Call

```ts
const result = await client.deliveryHealth.getPlatformStatus()
// → Promise<GetPlatformStatusQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetPlatformStatusQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "deliveryHealthQuery": {
    "platformStatus": {
      "windowMinutes": true,
      "measuredAt": true,
      "texts": {
        "acceptedCount": true,
        "p50LagSeconds": true,
        "p95LagSeconds": true,
        "waitingCount": true,
        "p95WaitingSeconds": true
      }
    }
  }
}
```
