<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getUploadReport

query · domain `files` · requires the READ scope

One upload's report — what its report sheet shows: rows in the file, how many contacts or properties it created, matched to existing records, restored, merged, skipped, failed or duplicated, and its skip-trace outcome and spend. Needs to be the uploader or able to see all contacts. Read the rows behind a count with listUploadReportRows.

## Call

```ts
const result = await client.files.getUploadReport({ fileProcessingTaskId: '<id>' })
// → Promise<GetUploadReportQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetUploadReportQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `fileProcessingTaskId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "fileProcessingTaskQuery": {
    "fileProcessingTask": {
      "id": true,
      "type": true,
      "status": true,
      "totalRows": true,
      "producedRecordsCount": true,
      "createdAt": true,
      "file": {
        "id": true,
        "fileName": true
      }
    },
    "uploadReport": {
      "totalRows": true,
      "createdCount": true,
      "matchedCount": true,
      "restoredCount": true,
      "skippedCount": true,
      "failedCount": true,
      "mergedAfterImportCount": true,
      "duplicateRowCount": true,
      "distinctContactsCount": true,
      "distinctPropertiesCount": true,
      "processedRowCount": true,
      "hasOutcomeTracking": true,
      "skiptrace": {
        "wasBilled": true,
        "netSpent": true,
        "found": true,
        "foundNothing": true,
        "failed": true,
        "notRunYet": true,
        "notTraced": true
      }
    }
  }
}
```
