<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# reviseLibraryFileRun

mutation · domain `libraryFileRuns` · requires the WRITE scope

Change how a run maps the spreadsheet's columns, in the person's words (message), then read previewLibraryFileRun again. skipTrace is true for a SKIPTRACE run and false for TAG_PROPERTIES. Nothing runs.

## Call

```ts
const result = await client.libraryFileRuns.reviseLibraryFileRun({ fileProcessingTaskId: '<id>', skipTrace: false, message: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ReviseLibraryFileRunMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ReviseLibraryFileRunMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `fileProcessingTaskId` | `ID!` | yes | — |
| `skipTrace` | `Boolean!` | yes | — |
| `message` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "fileProcessingTaskMutation": {
    "skipTraceRun": {
      "id": true,
      "status": true,
      "transformerAuthoringState": true,
      "hasAuthoredTransformer": true,
      "totalRows": true,
      "csvSample": {
        "header": true,
        "exampleData": true
      }
    },
    "tagRun": {
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
