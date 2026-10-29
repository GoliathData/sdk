<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# suppressChannel

mutation · domain `communications` · requires the WRITE scope

Value-level opt-out: block a phone number or email address for your organization on one medium (SMS, VOICE or EMAIL). Keyed on the normalized VALUE, not a contact: every contact carrying it, now and later, is blocked on send. SMS/VOICE take a phone in any format, EMAIL an address; an unparseable one is rejected (INVALID_PHONE_NUMBER / INVALID_INPUT). Idempotent. Blocks only the medium named (send VOICE too for calls). A person in the app clears it, or a developer-API key with clearChannelSuppression. Returns organizationId, normalizedValue, medium.

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
