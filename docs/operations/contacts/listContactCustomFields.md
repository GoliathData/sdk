<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listContactCustomFields

query · domain `contacts` · requires the READ scope

The organization's contact custom-field DEFINITIONS (id, name, type: TEXT/NUMBER/DOLLAR/DATE/LINK/DROPDOWN, dropdown options, allowMultiple, defaultValue). DEFINITIONS ONLY: no contact's value appears here, and none is missing; a contact's answer is getContact `customFields[].values` (updateContact echoes the same shape). Each id is the `customFieldId` for addCustomFieldValues (createContact) / updateCustomFieldValues (updateContact) on one contact, or setContactsCustomField for a DROPDOWN across a selection. Create definitions with createContactCustomField.

## Call

```ts
const result = await client.contacts.listContactCustomFields()
// → Promise<ListContactCustomFieldsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListContactCustomFieldsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
      "type": true,
      "description": true,
      "options": {
        "id": true,
        "label": true
      },
      "displayOrder": true,
      "allowMultiple": true,
      "defaultValue": true,
      "matchInboundTextsByValue": true,
      "hideOnContactRecord": true
    }
  }
}
```
