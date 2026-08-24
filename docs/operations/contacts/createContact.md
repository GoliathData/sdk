<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createContact

mutation · domain `contacts` · requires the WRITE scope

Create a contact. Requires sellerFirstName, sellerLastName, and type (LISTING | INVESTMENT | BUYER | UNDETERMINED); phones/emails optional.

## Call

```ts
const result = await client.contacts.createContact({ input: <CreateContactInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateContactMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateContactMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `CreateContactInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "createContact": {
      "id": true,
      "name": true,
      "createdAt": true,
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
