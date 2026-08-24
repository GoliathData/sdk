<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# enrichContact

mutation · domain `contacts` · requires the ADMIN scope

Skip-trace a contact to discover phone numbers and emails. CONSUMES ONE SKIPTRACE CREDIT (real money) — requires the ADMIN scope, and the key owner must be a team admin.

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
