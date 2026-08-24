<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# provisionPhoneNumber

mutation · domain `phoneNumbers` · requires the ADMIN scope

Buy a phone number from Twilio (a RECURRING monthly charge) and assign it to targetUserId. The line appears immediately in listCommunicationChannels and is immediately usable for sending from the app. phoneNumber must be an E.164 number returned by searchAvailablePhoneNumbers (an unavailable number is rejected). targetUserId is normally the key owner (listCommunicationChannels.currentUser.id); a user outside your organization is rejected. ADMIN scope: the key owner must currently be an org admin. Idempotent — reuse an Idempotency-Key to make a retry safe.

## Call

```ts
const result = await client.phoneNumbers.provisionPhoneNumber({ phoneNumber: '<text>', targetUserId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ProvisionPhoneNumberMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ProvisionPhoneNumberMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `phoneNumber` | `String!` | yes | — |
| `targetUserId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "twilioMutation": {
    "provisionPhoneNumber": {
      "id": true,
      "e164Number": true,
      "isPrimary": true,
      "canSendSms": true
    }
  }
}
```
