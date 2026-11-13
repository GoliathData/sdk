<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# sendInstagramMessage

mutation · domain `communications` · requires the WRITE scope

Reply by Instagram DM to the contact's newest Instagram message, from the account they wrote to, as the key owner, within 24 hours of it. Needs the send consent attestation, like sendText. Automated, so it may open with "This is an automated message." (Meta's rule): text is at most 960 bytes. Returns ok, or refusal (NOT_ENABLED, NO_CONVERSATION, WINDOW_CLOSED, NOT_CONNECTED, EMPTY, TOO_LONG, SEND_FAILED: check the timeline before retrying).

## Call

```ts
const result = await client.communications.sendInstagramMessage({ contactId: '<id>', text: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SendInstagramMessageMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SendInstagramMessageMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |
| `text` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "sendContactInstagramMessage": {
      "ok": true,
      "refusal": true
    }
  }
}
```
