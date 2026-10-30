<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# sendEmail

mutation · domain `communications` · requires the WRITE scope

Send an email as the key owner through their connected Gmail/Outlook mailbox. NEEDS THE ORGANIZATION'S SEND CONSENT ATTESTATION, like sendText: refused with 403 send_consent_not_attested until an org admin attests (setSendConsentAttestation), and with 403 outbound_paused while the org has paused everything. IMPORTANT: bodyHtml is the authored content, not necessarily the complete delivered Gmail body — appendSignature defaults to true, so Goliath appends the sending mailbox's default signature when one is available: on Gmail its synced/default Gmail signature, on Outlook the first signature the owner keeps in Goliath for that mailbox (unless they default to no signature). Set appendSignature to false when bodyHtml must be the complete email with nothing appended. fromClientId + fromEmail identify the sending mailbox — get them from listCommunicationChannels. contactId (optional) attaches the email to that contact timeline; a Do-Not-Contact-blocked contactId returns a GraphQL error (the one failure that is not ok:false) and releases any Idempotency-Key for a corrected retry. On any other failure ok is false and failureReason + failureMessage explain why (NO_CONNECTED_MAILBOX, INVALID_SENDER, MAILBOX_MISSING_SEND_SCOPE, or PROVIDER_SEND_FAILED). No attachments or threading in v1.

## Call

```ts
const result = await client.communications.sendEmail({ fromClientId: '<text>', fromEmail: '<text>', to: ['<text>'], subject: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SendEmailMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SendEmailMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `fromClientId` | `String!` | yes | — |
| `fromEmail` | `String!` | yes | — |
| `to` | `[String!]!` | yes | — |
| `cc` | `[String!]` | no | — |
| `bcc` | `[String!]` | no | — |
| `subject` | `String!` | yes | — |
| `bodyHtml` | `String` | no | — |
| `appendSignature` | `Boolean` | no | true |
| `contactId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "emailMutation": {
    "sendEmail": {
      "ok": true,
      "failureReason": true,
      "failureMessage": true,
      "contact": {
        "id": true
      }
    }
  }
}
```
