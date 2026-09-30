<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateDealCustomField

mutation · domain `deals` · requires the WRITE scope

Edit an existing deal custom-field DEFINITION in place (by id from listDealCustomFields). THIS IS THE CORRECT WAY TO ADD A DROPDOWN OPTION or fix a wrong name or default — do not create a second field. Owner-only: the field's pipeline must be OWNED by your organization; a field on a pipeline merely shared with you cannot be edited. Every field except the id is optional; whatever you omit is left untouched. The field's TYPE cannot be changed. `options` applies to DROPDOWN fields and REPLACES the whole option list rather than appending: send every option you want to keep, each existing one as { id, label } with its id from listDealCustomFields and its label UNCHANGED, and each new one as { label } with no id. DO NOT RENAME an option by sending a different label for an existing id: only the option row changes, the values already recorded on deals keep the old text and no longer match any option, and filters or workflows naming the old label are not rewritten. Any existing option you leave out is REMOVED; if deals or filters still reference a removed option the call is rejected until you pass optionDependencyResolutions. A default that is no longer one of the options is cleared. Names must be unique within the pipeline. Returns the updated field with its full option list.

## Call

```ts
const result = await client.deals.updateDealCustomField({ customFieldId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateDealCustomFieldMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateDealCustomFieldMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `customFieldId` | `ID!` | yes | — |
| `name` | `String` | no | — |
| `options` | `[UpsertDealCustomFieldOptionInput!]` | no | — |
| `defaultValue` | `String` | no | — |
| `optionDependencyResolutions` | `[DependencyResolutionInput!]` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealCustomFieldMutation": {
    "updateCustomField": {
      "id": true,
      "name": true,
      "type": true,
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
