<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# buyDialingPoolNumbers

mutation · domain `phoneNumbers` · requires the ADMIN scope

Buy phone numbers straight into the bulk-dialing rotation: each is a RECURRING monthly charge. Either `count` (with an optional preferred `areaCode`; the provider picks) or `phoneNumbers` (E.164s from searchAvailablePhoneNumbers; a number taken meanwhile is a shortfall, never swapped). A number past the plan's included numbers adds $5/mo and is refused unless `confirmExtraPhoneNumberCharge` is true, sent only once the person agreed to that charge. `purchaseAttemptKey`: mint ONE per intended purchase and resend it unchanged on every retry, so a lost response never buys twice. Returns addedLines and, when some failed, failure { failedCount, message, kind }. ADMIN: the key owner must currently be an org admin.

## Call

```ts
const result = await client.phoneNumbers.buyDialingPoolNumbers({ purchaseAttemptKey: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<BuyDialingPoolNumbersMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `BuyDialingPoolNumbersMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `purchaseAttemptKey` | `String!` | yes | — |
| `count` | `Int` | no | — |
| `phoneNumbers` | `[String!]` | no | — |
| `areaCode` | `Int` | no | — |
| `confirmExtraPhoneNumberCharge` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dialingPoolMutation": {
    "purchaseNumbersIntoPool": {
      "addedLines": {
        "id": true,
        "e164Number": true
      },
      "failure": {
        "failedCount": true,
        "message": true,
        "kind": true
      }
    }
  }
}
```
