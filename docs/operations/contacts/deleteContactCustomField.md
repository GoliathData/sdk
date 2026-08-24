<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteContactCustomField

mutation · domain `contacts` · requires the WRITE scope

Permanently delete a contact custom-field DEFINITION (by id from listContactCustomFields). DESTRUCTIVE AND IRREVERSIBLE: every value recorded on every contact for this field is deleted with it and is NOT moved to another field — those answers are simply gone. Prefer updateContactCustomField whenever the field is merely wrong rather than unwanted. Call getDeletionImpact first with targetKind CONTACT_CUSTOM_FIELD and targetId the field id: it reports how many contacts hold a value and which filters/workflows reference the field, and returns the impactVersion you must hand back here as dependencyResolution.impactVersion (pass an empty `replacements` array when it reports no replacementRequirements). Where it DOES require a replacement, the replacement redirects the filters/workflows that pointed at this field to another field — it does not carry the contact values over. The impactVersion goes stale if anything changes in between, so re-read the impact and retry rather than reusing an old one. System-defined fields (e.g. Buyer/Seller) cannot be deleted. Confirm with the user before calling.

## Call

```ts
const result = await client.contacts.deleteContactCustomField({ customFieldId: '<id>', dependencyResolution: <DependencyResolutionInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteContactCustomFieldMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteContactCustomFieldMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `customFieldId` | `ID!` | yes | — |
| `dependencyResolution` | `DependencyResolutionInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactCustomFieldMutation": {
    "deleteCustomField": {
      "getMyOrganizationsCustomFields": {
        "id": true,
        "name": true,
        "type": true
      }
    }
  }
}
```
