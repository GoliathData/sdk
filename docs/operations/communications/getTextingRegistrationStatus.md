<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getTextingRegistrationStatus

query · domain `communications` · requires the READ scope

The organization's A2P 10DLC texting registration, STATUS ONLY: each brand (`status`, `statusLabel`, `useCaseLabel`) and its sending campaigns (`sendReady` true = approved and able to text; `rejectionReasons` when a carrier refused it). Read-only: registering, resubmitting or retrying happens in the Goliath app (Settings → Phone → Registration). For whether the org can text at all right now, listCommunicationChannels' textingReadiness.

## Call

```ts
const result = await client.communications.getTextingRegistrationStatus()
// → Promise<GetTextingRegistrationStatusQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetTextingRegistrationStatusQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "twilioQuery": {
    "a2pRegistrations": {
      "id": true,
      "brandName": true,
      "useCaseLabel": true,
      "status": true,
      "statusLabel": true,
      "sendingCampaigns": {
        "id": true,
        "status": true,
        "statusLabel": true,
        "sendReady": true,
        "rejectionReasons": true
      }
    }
  }
}
```
