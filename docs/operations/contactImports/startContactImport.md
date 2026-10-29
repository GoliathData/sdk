<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# startContactImport

mutation · domain `contactImports` · requires the WRITE scope

Start importing contacts from a spreadsheet the person attached to the chat. Pass artifactId, the shelf id the chat names for the file (`[shelf id …]`). It creates the same upload the Import page creates (it shows on the Files page) and runs the import mapper on it, which takes up to a few minutes, then returns the import (its id is the fileProcessingTaskId every other contactImports operation takes), the file row count (totalRows) and its columns with example values (csvSample). Nothing is imported yet. transformerAuthoringState COMPLETED with hasAuthoredTransformer true means the mapping is ready: read it with previewContactImport. IN_PROGRESS means another mapping run on this upload is still going: wait a little and call authorContactImportMapping. Only .csv, .xlsx and .xls files can be imported (spreadsheets are stored as CSV). Call it once per file and keep the id; a second call for a file whose import is not confirmed yet returns that same import.

## Call

```ts
const result = await client.contactImports.startContactImport({ artifactId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<StartContactImportMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `StartContactImportMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `artifactId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "fileProcessingTaskMutation": {
    "startContactImportFromArtifact": {
      "id": true,
      "status": true,
      "transformerAuthoringState": true,
      "hasAuthoredTransformer": true,
      "totalRows": true,
      "csvSample": {
        "header": true,
        "exampleData": true
      }
    }
  }
}
```
