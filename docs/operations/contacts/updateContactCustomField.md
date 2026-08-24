<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateContactCustomField

mutation · domain `contacts` · requires the WRITE scope

Edit an existing contact custom-field DEFINITION in place (by id from listContactCustomFields). THIS IS THE CORRECT WAY TO FIX A FIELD you created with the wrong name, description, dropdown options, or default — do not create a second field. Every field except the id is optional; whatever you omit is left untouched. The field's TYPE cannot be changed (a TEXT field can never become a DROPDOWN) — delete it and create a new one instead. `options` applies to DROPDOWN fields ONLY (sending it for any other type is rejected) and REPLACES the whole option list rather than appending: send every option you want to keep, each existing one as { id, label } (its id from listContactCustomFields, which both preserves any contact values already recorded against it and lets you RENAME it by changing the label), and each new one as { label } with no id. Any existing option you leave out is REMOVED; if contacts, filters, or workflows still reference a removed option the call is rejected until you pass optionDependencyResolutions — call getDeletionImpact with targetKind CONTACT_CUSTOM_FIELD_OPTION and targetId the option id, then hand back its impactVersion plus a replacement option for each. Changing `defaultValue` fills the contacts that currently show no value; contacts that already hold a real value are never rewritten. A default that is no longer one of the options is cleared. Names must be unique within the organization — a rename onto an existing field name is rejected. System-defined fields (e.g. Buyer/Seller) cannot be renamed and cannot lose their built-in options.

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
| `description` | `String` | no | — |
| `options` | `[UpsertCustomFieldOptionInput!]` | no | — |
| `defaultValue` | `String` | no | — |
| `optionDependencyResolutions` | `[DependencyResolutionInput!]` | no | — |

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
      "defaultValue": true
    }
  }
}
```
