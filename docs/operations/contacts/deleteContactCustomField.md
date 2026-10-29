<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteContactCustomField

mutation · domain `contacts` · requires the WRITE scope

Permanently delete a contact custom-field DEFINITION (id from listContactCustomFields). DESTRUCTIVE AND IRREVERSIBLE: every value recorded on every contact for it is deleted, NOT moved to another field. Prefer updateContactCustomField when the field is merely wrong rather than unwanted. Call getDeletionImpact first (targetKind CONTACT_CUSTOM_FIELD, targetId the field id): it reports how many contacts hold a value and which filters/workflows reference the field, and returns the impactVersion to hand back as dependencyResolution.impactVersion (with an empty `replacements` array when it reports no replacementRequirements). A required replacement redirects those filters/workflows to another field; it does not carry contact values over. The impactVersion goes stale if anything changes in between: re-read the impact and retry rather than reuse an old one. System-defined fields (e.g. Buyer/Seller) cannot be deleted. Confirm with the user before calling.

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
