<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listFiles

query · domain `files` · requires the READ scope

The Files list, newest first: `uploads` (imports — status, type, file name, rows, who and when; the id is the `fileProcessingTaskId` for getUploadReport) and `downloads` (standalone exports — the id is the `dataExportId` for getExportReport). `filterTree` is a BULK_TASK filter tree, the same `{ id, operator, conditions: [{ id, fieldId, value }], groups }` shape every filter takes. Uploads only: `{"id":"r","operator":"AND","groups":[],"conditions":[{"id":"u","fieldId":"hasFileProcessingTask","value":true}]}`. Downloads only: conditions `hasDataExport` true AND `hasFileProcessingTask` false. Both: an OR group of the two presence conditions. Add `fileName` (text) to search names, `fileProcessingTaskType` / `dataExportType` (["CONTACTS"|"PROPERTIES"|"SKIPTRACES"|"PROPERTY_SIGNALS"]) for a type. Page with limit/offset.

## Call

```ts
const result = await client.files.listFiles()
// → Promise<ListFilesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListFilesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `filterTree` | `JSON` | no | {id: "root", operator: "AND", conditions: [], groups: []} |
| `limit` | `Int` | no | 25 |
| `offset` | `Int` | no | 0 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 100.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "filterQuery": {
    "applyFilesFilter": {
      "uploads": {
        "id": true,
        "status": true,
        "type": true,
        "createdAt": true,
        "createdByUser": {
          "id": true,
          "firstName": true,
          "lastName": true
        },
        "file": {
          "id": true,
          "fileName": true
        },
        "totalRows": true,
        "producedRecordsCount": true,
        "dataExport": {
          "id": true,
          "status": true,
          "fileName": true
        }
      },
      "downloads": {
        "id": true,
        "fileName": true,
        "status": true,
        "type": true,
        "numRows": true,
        "createdAt": true,
        "createdByUser": {
          "id": true,
          "firstName": true,
          "lastName": true
        }
      },
      "pagination": {
        "total": true,
        "hasMore": true
      }
    }
  }
}
```
