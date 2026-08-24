<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createContactFromProperty

mutation · domain `contacts` · requires the ADMIN scope

Create a CRM contact from a property (by id/esId). This triggers skip-trace enrichment on the property and CONSUMES ONE SKIPTRACE CREDIT (real money) — requires the ADMIN scope, and the key owner must be a team admin. Returns the property with its linked contacts, including the newly created one.

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
