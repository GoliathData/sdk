<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listContactCustomFields

query · domain `contacts` · requires the READ scope

List the organization's contact custom-field DEFINITIONS (id, name, type — TEXT/NUMBER/DOLLAR/DATE/LINK/DROPDOWN, dropdown options, allowMultiple, defaultValue). DEFINITIONS ONLY — no contact's recorded value appears here, and none is missing: to read what a contact answered, call getContact and read `customFields[].values` (or updateContact's response, which echoes the same shape). Use each id as the `customFieldId` in the addCustomFieldValues (createContact) / updateCustomFieldValues (updateContact) inputs to write one contact's value, or in setContactsCustomField to set a DROPDOWN across a whole selection. Create new definitions with createContactCustomField.

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
      "defaultValue": true
    }
  }
}
```
