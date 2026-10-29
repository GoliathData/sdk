<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# reviseContactImportMapping

mutation · domain `contactImports` · requires the WRITE scope

Change how an import maps the spreadsheet’s columns, in plain words: message is the change the person asked for (for example "the Owner 2 column is a second contact name, not a note" or "put the Lead Source column in the Source custom field"). Re-runs the import mapper, which takes up to a few minutes; read the result again with previewContactImport. Nothing is imported.

## Call

```ts
const result = await client.contactImports.reviseContactImportMapping({ fileProcessingTaskId: '<id>', message: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ReviseContactImportMappingMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ReviseContactImportMappingMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `fileProcessingTaskId` | `ID!` | yes | — |
| `message` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "fileProcessingTaskMutation": {
    "reviseContactTransformer": {
      "id": true,
      "status": true,
      "transformerAuthoringState": true,
      "hasAuthoredTransformer": true
    }
  }
}
```
