<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# importPipelineItem

mutation · domain `crmImport` · requires the IMPORT scope

Create-or-get a pipeline item migrated from an external system. Keyed on (sourceSystem, externalId): replaying the same record returns the existing pipeline item with wasCreated=false instead of duplicating. Honors historical createdAt/updatedAt (must be in the past) and suppresses live side effects — no workflow triggers (neither DEAL stage-entered nor per-contact pipeline item-created events fire), no notifications. The pipeline item field takes the same shape as createPipelineItem: stageId from listPipelineStages, linked contacts/users by id, propertyStrings for unresolved addresses, customFieldValues from listPipelineItemCustomFields. The create is atomic — the pipeline item row and every link (contacts, properties, users, splits) commit together or not at all, so a failed call leaves nothing behind and a retry re-creates cleanly. A replay (wasCreated=false) never rewrites the existing pipeline item — links and edits made since the import are left alone — with one deliberate exception: custom-field values are filled where still MISSING (crash-retry recovery for the one write applied after the create) and never overwritten.

## Call

```ts
const result = await client.crmImport.importPipelineItem({ input: <ImportPipelineItemInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ImportPipelineItemMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ImportPipelineItemMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `ImportPipelineItemInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "crmImportMutation": {
    "importPipelineItem": {
      "pipelineItemId": true,
      "wasCreated": true
    }
  }
}
```
