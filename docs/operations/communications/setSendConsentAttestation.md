<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setSendConsentAttestation

mutation · domain `communications` · requires the ADMIN scope

Attest (`attested: true`) or withdraw (`false`) the organization's send consent: the org admin who owns this key states, once for the whole organization, that every contact it texts or emails through the developer API consented to be contacted. It opens the operations that message contacts (sendText, sendEmail, and accepting a card that sends, a contract's emails to its signers) to the organization's developer-API keys; it replaces no check — every send still runs opt-out, Do Not Contact and A2P registration, and Pause everything still holds them. Only on the admin's own word: never attest for them. ADMIN scope; the key owner must currently be an org admin. Returns attested, attestedAt, attestedByUserId.

## Call

```ts
const result = await client.communications.setSendConsentAttestation({ attested: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetSendConsentAttestationMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetSendConsentAttestationMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `attested` | `Boolean!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationMutation": {
    "setDeveloperApiSendConsent": {
      "attested": true,
      "attestedAt": true,
      "attestedByUserId": true
    }
  }
}
```
