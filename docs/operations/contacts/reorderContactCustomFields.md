<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# reorderContactCustomFields

mutation · domain `contacts` · requires the WRITE scope

Set the DISPLAY ORDER of the organization's contact custom fields. Presentation only (where fields sit on the record and in the app's field lists): no definition, option or recorded value is touched, and filtering and automations are unchanged. Pass EVERY custom-field id the organization has, in display order (first id = first position): call listContactCustomFields immediately before, reorder that complete list, send all of it. A partial list is rejected for the ids it left out, an id that is not a current custom field as unknown, and a repeated id naming the repeat: every field appears exactly once. It cannot reorder a subset.

## Call

```ts
const result = await client.contacts.reorderContactCustomFields({ customFieldIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ReorderContactCustomFieldsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ReorderContactCustomFieldsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `customFieldIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactCustomFieldMutation": {
    "reorderCustomFields": {
      "getMyOrganizationsCustomFields": {
        "id": true,
        "name": true,
        "displayOrder": true
      }
    }
  }
}
```
