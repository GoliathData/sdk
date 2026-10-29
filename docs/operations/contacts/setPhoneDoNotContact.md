<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setPhoneDoNotContact

mutation · domain `contacts` · requires the WRITE scope

Opt one phone number out of texts AND calls for the whole organization, on every contact that carries it (suppressChannel does one medium). Sets only: it cannot be undone from chat or this API; only a person in the app can clear it.

## Call

```ts
const result = await client.contacts.setPhoneDoNotContact({ phoneNumber: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetPhoneDoNotContactMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetPhoneDoNotContactMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `phoneNumber` | `String!` | yes | — |
| `reason` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "setPhoneDoNotContact": {
      "normalizedValue": true,
      "doNotContact": true
    }
  }
}
```
