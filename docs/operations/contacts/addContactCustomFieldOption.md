<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addContactCustomFieldOption

mutation · domain `contacts` · requires the WRITE scope

Add one option to a contact DROPDOWN field (listContactCustomFields). Never drops an option; a label already there (any case) is kept as-is.

## Call

```ts
const result = await client.contacts.addContactCustomFieldOption({ customFieldId: '<id>', label: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddContactCustomFieldOptionMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddContactCustomFieldOptionMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `customFieldId` | `ID!` | yes | — |
| `label` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactCustomFieldMutation": {
    "addOption": {
      "id": true,
      "name": true,
      "options": {
        "id": true,
        "label": true
      }
    }
  }
}
```
