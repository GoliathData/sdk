<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createContactFromProperty

mutation · domain `contacts` · requires the ADMIN scope

Create a CRM contact from a property (id/esId) by skip-tracing it. The trace may still run after this answers (minutes, or hours on a batch vendor), and nothing tells the caller when it ends. While it runs the call can answer CONFLICT 'Skip trace is running…' instead of the property with its linked contacts. A contact can be made later, but never by a trace that fails or for a property with no one named on it; look for it in getPropertyOwners' `crmContacts`. A later read shows what is on file now, which can come from an earlier trace; no read tells whether the trace this call started has finished. CONSUMES ONE SKIPTRACE CREDIT when it starts a new trace (plan allowance first except in a trial, then real money; checkBillingAction), given back when that trace finds no one or fails without an answer — requires the ADMIN scope, and the key owner must be a team admin.

## Call

```ts
const result = await client.contacts.createContactFromProperty({ propertyId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateContactFromPropertyMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateContactFromPropertyMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `propertyId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "propertyMutation": {
    "createContact": {
      "id": true,
      "address": {
        "addressFull": true
      },
      "contacts": {
        "id": true,
        "name": true,
        "createdAt": true
      }
    }
  }
}
```
