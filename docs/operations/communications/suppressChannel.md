<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# suppressChannel

mutation · domain `communications` · requires the WRITE scope

Value-level opt-out: suppress a phone number or email address for your organization on one medium (SMS, VOICE, or EMAIL). The suppression is keyed on the normalized VALUE, not a contact — it blocks that channel for every contact carrying the value, present and future, and is enforced by the Do-Not-Contact guard on send. medium SMS/VOICE take a phone value (any format; normalized to 10-digit NANP or E.164), EMAIL takes an email address; an unparseable value is rejected with INVALID_PHONE_NUMBER / INVALID_INPUT. Idempotent — re-suppressing the same value+medium re-activates the row without duplicating it. Suppresses only the medium you name (no cross-medium broadening); to also opt a number out of calls, send a second request with medium VOICE. Returns the organizationId, the normalizedValue actually stored, and the medium.

## Call

```ts
const result = await client.communications.suppressChannel({ value: '<text>', medium: <SuppressionMedium> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SuppressChannelMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SuppressChannelMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `value` | `String!` | yes | — |
| `medium` | `SuppressionMedium!` | yes | — |
| `reason` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "suppressChannel": {
      "organizationId": true,
      "normalizedValue": true,
      "medium": true
    }
  }
}
```
