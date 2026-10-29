<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getSendConsentAttestation

query · domain `communications` · requires the READ scope

Whether the organization's send consent attestation stands: an org admin's one-time statement that every contact the organization texts or emails through the developer API consented. Every operation that messages a contact (sendText, sendEmail, accepting a card that sends, a contract's emails to its signers) is refused (403 send_consent_not_attested) until `attested` is true; `attestedAt` and `attestedByUserId` say when and who. Set it with setSendConsentAttestation (ADMIN).

## Call

```ts
const result = await client.communications.getSendConsentAttestation()
// → Promise<GetSendConsentAttestationQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetSendConsentAttestationQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "currentUser": {
    "id": true,
    "organization": {
      "id": true,
      "developerApiSendConsent": {
        "attested": true,
        "attestedAt": true,
        "attestedByUserId": true
      }
    }
  }
}
```
