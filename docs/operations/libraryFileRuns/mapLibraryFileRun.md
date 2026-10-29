<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# mapLibraryFileRun

mutation · domain `libraryFileRuns` · requires the WRITE scope

Map a run's columns with the import mapper (up to a few minutes). skipTrace is true for a SKIPTRACE run and false for TAG_PROPERTIES. Returns totalRows and the columns with example values (csvSample). Nothing runs.

## Call

```ts
const result = await client.libraryFileRuns.mapLibraryFileRun({ fileProcessingTaskId: '<id>', skipTrace: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<MapLibraryFileRunMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `MapLibraryFileRunMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `fileProcessingTaskId` | `ID!` | yes | — |
| `skipTrace` | `Boolean!` | yes | — |

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
