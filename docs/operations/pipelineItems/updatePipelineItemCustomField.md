<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updatePipelineItemCustomField

mutation · domain `pipelineItems` · requires the WRITE scope

Edit an existing pipeline item custom-field DEFINITION in place (by id from listPipelineItemCustomFields). THIS IS THE CORRECT WAY TO ADD A DROPDOWN OPTION or fix a wrong name or default — do not create a second field. Owner-only: the field's pipeline must be OWNED by your organization; a field on a pipeline merely shared with you cannot be edited. Omitted fields are untouched. The field's TYPE cannot be changed. `options` applies to DROPDOWN fields and REPLACES the whole option list rather than appending: send every option you want to keep, each existing one as { id, label } with its id from listPipelineItemCustomFields, and each new one as { label } with no id. To RENAME an option, send its existing id with the new label: every value already recorded on pipeline items, the field's default, and the saved filters and queued bulk tasks naming the old label all move to the new one. Sending a new label WITHOUT the id instead removes the old option and creates a different one. Any existing option you leave out is REMOVED; if pipeline items or filters still reference a removed option the call is rejected until you pass optionDependencyResolutions: from getDeletionImpact (DEAL_CUSTOM_FIELD_OPTION, the option id), the person picking each replacement. A default that is no longer one of the options is cleared. Names must be unique within the pipeline. Returns the updated field with its full option list.

## Call

```ts
const result = await client.pipelineItems.updatePipelineItemCustomField({ customFieldId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdatePipelineItemCustomFieldMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdatePipelineItemCustomFieldMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `customFieldId` | `ID!` | yes | — |
| `name` | `String` | no | — |
| `options` | `[UpsertPipelineItemCustomFieldOptionInput!]` | no | — |
| `defaultValue` | `String` | no | — |
| `optionDependencyResolutions` | `[DependencyResolutionInput!]` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemCustomFieldMutation": {
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
