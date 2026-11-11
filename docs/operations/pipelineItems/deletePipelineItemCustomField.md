<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deletePipelineItemCustomField

mutation · domain `pipelineItems` · requires the WRITE scope

Permanently delete a pipeline item custom-field DEFINITION (id from listPipelineItemCustomFields). IRREVERSIBLE: every value recorded on every pipeline item for it is deleted. Prefer updatePipelineItemCustomField when the field is wrong rather than unwanted. Call getDeletionImpact first (targetKind DEAL_CUSTOM_FIELD) and hand back its impactVersion as dependencyResolution.impactVersion, with a replacement field for each reported requirement (filters, workflows); an empty `replacements` when none. A replacement redirects those references, never the values. System-defined fields cannot be deleted. Returns the remaining fields of `pipelineId` (the field's pipeline). Confirm with the user before calling.

## Call

```ts
const result = await client.pipelineItems.deletePipelineItemCustomField({ customFieldId: '<id>', pipelineId: '<id>', dependencyResolution: <DependencyResolutionInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeletePipelineItemCustomFieldMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeletePipelineItemCustomFieldMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `customFieldId` | `ID!` | yes | — |
| `pipelineId` | `ID!` | yes | — |
| `dependencyResolution` | `DependencyResolutionInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemCustomFieldMutation": {
    "deleteCustomField": {
      "getPipelineCustomFields": {
        "id": true,
        "name": true
      }
    }
  }
}
```
