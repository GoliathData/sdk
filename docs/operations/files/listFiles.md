<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listFiles

query · domain `files` · requires the READ scope

The Files list, newest first, running jobs included: every skip trace and export in Library Downloads, wherever it was started, with the `bulkTaskId` getBulkTask reads its progress by. `uploads` (imports — status, type, file name, rows, who and when; the id is the `fileProcessingTaskId` for getUploadReport) and `downloads` (standalone exports and skip traces, listed while they run — the id is the `dataExportId` for getExportReport). A download, or the `dataExport` of an upload, whose `status` is PROCESSING is that job still running: its `bulkTaskId` is the job; with no `bulkTaskId` it cannot be followed, so say it is in progress and its file lands in Downloads. A download carries `estimatedRemainingTimeInSeconds`, a best-effort ETA (null = no estimate) that runs high early: never promise a finish time from it. `filterTree` is a BULK_TASK filter tree, the same `{ id, operator, conditions: [{ id, fieldId, value }], groups }` shape every filter takes. Uploads only: `{"id":"r","operator":"AND","groups":[],"conditions":[{"id":"u","fieldId":"hasFileProcessingTask","value":true}]}`. Downloads only: conditions `hasDataExport` true AND `hasFileProcessingTask` false. Both: an OR group of the two presence conditions. Add `fileName` (text) to search names, `fileProcessingTaskType` / `dataExportType` (["CONTACTS"|"PROPERTIES"|"SKIPTRACES"|"PROPERTY_SIGNALS"]) for a type. Page with limit/offset.

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
          "fileName": true,
          "bulkTaskId": true
        }
      },
      "downloads": {
        "id": true,
        "fileName": true,
        "status": true,
        "type": true,
        "numRows": true,
        "createdAt": true,
        "bulkTaskId": true,
        "estimatedRemainingTimeInSeconds": true,
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
