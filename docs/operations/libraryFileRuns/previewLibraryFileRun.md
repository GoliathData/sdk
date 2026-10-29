<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# previewLibraryFileRun

query · domain `libraryFileRuns` · requires the READ scope

The first rows of a mapped run as it reads them: for a skip trace each row's lookups (inputs: whose owner, at which address), for a tag the properties. The row count is how many rows it reads. A skip trace costs up to one credit per lookup: rows times the lookups per row. skipTrace is true for a SKIPTRACE run and false for TAG_PROPERTIES. limit is 1 to 10. Read only.

## Call

```ts
const result = await client.libraryFileRuns.previewLibraryFileRun({ fileProcessingTaskId: '<id>', skipTrace: false })
// → Promise<PreviewLibraryFileRunQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PreviewLibraryFileRunQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `fileProcessingTaskId` | `ID!` | yes | — |
| `skipTrace` | `Boolean!` | yes | — |
| `limit` | `Int` | no | 8 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 10.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "fileProcessingTaskQuery": {
    "skipTraceRowCount": true,
    "skipTraceRows": {
      "rowIndex": true,
      "rawRowJson": true,
      "error": true,
      "inputs": {
        "actorName": true,
        "propertyAddress": {
          "raw": true
        },
        "mailingAddress": {
          "raw": true
        },
        "propertyEsId": true
      }
    },
    "tagRowCount": true,
    "tagRows": {
      "rowIndex": true,
      "rawRowJson": true,
      "error": true,
      "properties": {
        "address": {
          "raw": true
        }
      }
    }
  }
}
```
