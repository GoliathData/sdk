<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# enrichContact

mutation · domain `contacts` · requires the ADMIN scope

Skip-trace a contact to discover phone numbers and emails. The trace may still run after this answers (minutes, or hours on a batch vendor), and nothing tells the caller when it ends. The response shows the contact as it is now, and phones and emails the trace finds can appear on it later (getContact). An earlier enrichment of the contact that is still running, or that found something, is reused instead of a new trace. A later read shows what is on file now, which can come from an earlier trace; no read tells whether the trace this call started has finished. CONSUMES ONE SKIPTRACE CREDIT when it starts a new trace (plan allowance first except in a trial, then real money; checkBillingAction), given back when that trace finds no one or fails without an answer — requires the ADMIN scope, and the key owner must be a team admin.

## Call

```ts
const result = await client.contacts.enrichContact({ contactId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<EnrichContactMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `EnrichContactMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "enrichContact": {
      "id": true,
      "name": true,
      "emails": {
        "id": true,
        "email": true,
        "verificationStatus": true
      },
      "phoneNumbers": {
        "id": true,
        "phoneNumber": true,
        "phoneType": true,
        "verificationStatus": true
      }
    }
  }
}
```
