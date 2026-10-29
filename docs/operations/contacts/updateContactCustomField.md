<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateContactCustomField

mutation · domain `contacts` · requires the WRITE scope

Edit a contact custom-field DEFINITION in place (id from listContactCustomFields). THIS IS THE CORRECT WAY TO FIX A FIELD created with the wrong name, description, dropdown options or default; do not create a second field. Every field but the id is optional; omitted ones are untouched. `type` retypes it in place (same id), sent alone or with the `options` of a new DROPDOWN; refused once a contact has a value, anything uses it, it has a default, or it is a dropdown. `options` is for DROPDOWN fields ONLY (rejected on any other type) and REPLACES the whole option list: send every option to keep, each existing one as { id, label } (its id from listContactCustomFields, which keeps contact values recorded against it and lets you RENAME it by changing the label), each new one as { label } with no id. An existing option you leave out is REMOVED; if contacts, filters or workflows still reference it the call is rejected until you pass optionDependencyResolutions: call getDeletionImpact with targetKind CONTACT_CUSTOM_FIELD_OPTION and targetId the option id, then hand back its impactVersion plus a replacement option for each. Changing `defaultValue` fills contacts that show no value; a contact holding a real value is never rewritten. A default no longer among the options is cleared. Names are unique in the organization: a rename onto an existing field name is rejected. System-defined fields (e.g. Buyer/Seller, Source) cannot be renamed, deleted or lose their built-in options; `hideOnContactRecord: true` takes any field, system ones too, off the contact record (display only, values kept).

## Call

```ts
const result = await client.contacts.updateContactCustomField({ customFieldId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateContactCustomFieldMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateContactCustomFieldMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `customFieldId` | `ID!` | yes | — |
| `name` | `String` | no | — |
| `type` | `ContactCustomFieldType` | no | — |
| `description` | `String` | no | — |
| `options` | `[UpsertCustomFieldOptionInput!]` | no | — |
| `defaultValue` | `String` | no | — |
| `optionDependencyResolutions` | `[DependencyResolutionInput!]` | no | — |
| `matchInboundTextsByValue` | `Boolean` | no | — |
| `hideOnContactRecord` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactCustomFieldMutation": {
    "updateCustomField": {
      "id": true,
      "name": true,
      "type": true,
      "description": true,
      "displayOrder": true,
      "allowMultiple": true,
      "defaultValue": true,
      "matchInboundTextsByValue": true,
      "hideOnContactRecord": true
    }
  }
}
```
