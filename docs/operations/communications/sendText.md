<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# sendText

mutation · domain `communications` · requires the WRITE scope

Send an SMS to a phone number (E.164, e.g. +13235550100; an unparseable number is rejected up front with INVALID_PHONE_NUMBER) as the key owner. NEEDS THE ORGANIZATION'S SEND CONSENT ATTESTATION: until an org admin attests once that every contact the organization messages through the API consented (setSendConsentAttestation; read it with getSendConsentAttestation), this is refused with 403 send_consent_not_attested, and while the org has paused everything it is refused with 403 outbound_paused. Runs the checks the app's composer runs: opt-out and Do-Not-Contact guard, A2P active-campaign gate, send throttles and daily caps, find-or-create contact from the number, and conversation + activity logging. A 200 response is NOT delivery — check status: FAILED or SKIPPED means the message never reached the contact (errorCode/errorMessage say why) even though the row is returned without a GraphQL error. Omit fromPhoneLineId to use your assigned line; sending from another user's assigned line requires the VIEW_ALL_PHONES capability (org-shared bulk lines are usable by any org member without it; another organization's line is never usable). Call listCommunicationChannels first and pick a line whose canSendSms is true.

## Call

```ts
const result = await client.communications.sendText({ toPhoneNumber: '<text>', message: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SendTextMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SendTextMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `toPhoneNumber` | `String!` | yes | — |
| `message` | `String!` | yes | — |
| `fromPhoneLineId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "smsMutation": {
    "sendSms": {
      "id": true,
      "message": true,
      "status": true,
      "errorCode": true,
      "errorMessage": true,
      "fromPhoneNumber": true,
      "toPhoneNumber": true,
      "createdAt": true
    }
  }
}
```
