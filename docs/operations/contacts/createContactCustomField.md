<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createContactCustomField

mutation · domain `contacts` · requires the WRITE scope

Create an org-wide contact custom-field DEFINITION (name + type: TEXT | NUMBER | DOLLAR | DATE | LINK | DROPDOWN; `options` required for DROPDOWN; `allowMultiple` optional), synchronously. Returns the org custom-field catalog: find the new id by name (or listContactCustomFields), then write values via addCustomFieldValues (createContact) / updateCustomFieldValues (updateContact). A defaultValue fills every contact lacking a value, archived too, and stays if later changed; nothing counts them: ask first.

## Call

```ts
const result = await client.contacts.createContactCustomField({ input: <CreateCustomFieldInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateContactCustomFieldMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateContactCustomFieldMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `CreateCustomFieldInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactCustomFieldMutation": {
    "createCustomField": {
      "getMyOrganizationsCustomFields": {
        "id": true,
        "name": true,
        "type": true
      }
    }
  }
}
```
