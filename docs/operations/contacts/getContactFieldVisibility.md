<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getContactFieldVisibility

query · domain `contacts` · requires the READ scope

Each contact field's show-when rule: visibleWhen { fieldId, optionIds } (shown only when that dropdown is any of those options), null when always shown.

## Call

```ts
const result = await client.contacts.getContactFieldVisibility()
// → Promise<GetContactFieldVisibilityQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetContactFieldVisibilityQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactCustomFieldQuery": {
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
```
