<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setContactCustomFieldVisibility

mutation · domain `contacts` · requires the WRITE scope

Show fields only when one dropdown is any of optionIds (that dropdown's option ids), replacing each field's rule (read it first: getContactFieldVisibility); optionIds empty = always show. Display only: no value changes.

## Call

```ts
const result = await client.contacts.setContactCustomFieldVisibility({ customFieldIds: ['<id>'], optionIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetContactCustomFieldVisibilityMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetContactCustomFieldVisibilityMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `customFieldIds` | `[ID!]!` | yes | — |
| `optionIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactCustomFieldMutation": {
    "setCustomFieldVisibility": {
      "getMyOrganizationsCustomFields": {
        "id": true,
        "name": true,
        "visibleWhen": {
          "fieldId": true,
          "optionIds": true
        }
      }
    }
  }
}
```
