<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getContactImport

query · domain `contactImports` · requires the READ scope

The status of an import: status (CREATED and AUTHORING_TRANSFORMER = not confirmed yet, PENDING_PROCESSING and PROCESSING = importing, COMPLETED, FAILED, NOT_ENOUGH_BALANCE), totalRows, the contacts produced so far (producedRecordsCount), a best-effort estimatedRemainingTimeInSeconds (it runs high early in an import, so never promise a time from it: the chat that started the import is told when it finishes), the upload’s own list (contactTag, named for the file; not the list the person chose), and the results report: created, matched (an existing contact updated, or one an earlier row of this same file made), duplicateRowCount (rows that repeat an earlier row of this file), mergedAfterImportCount (the duplicate rows whose new contact was merged into an earlier row’s after the import; the rest of the duplicates count as matched, so contacts they already had = matched - (duplicateRowCount - mergedAfterImportCount)), restored (an archived match brought back), skipped and failed rows, and processedRowCount. One read answers "how is it going". For an import this chat started, the chat is told when it finishes, so a code task never polls it; for one started elsewhere (Files, another chat), poll every 10 to 30 seconds.

## Call

```ts
const result = await client.contactImports.getContactImport({ fileProcessingTaskId: '<id>' })
// → Promise<GetContactImportQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetContactImportQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
      "status": true,
      "totalRows": true,
      "producedRecordsCount": true,
      "estimatedRemainingTimeInSeconds": true,
      "contactTag": {
        "name": true
      }
    },
    "uploadReport": {
      "createdCount": true,
      "matchedCount": true,
      "restoredCount": true,
      "skippedCount": true,
      "failedCount": true,
      "mergedAfterImportCount": true,
      "duplicateRowCount": true,
      "processedRowCount": true
    }
  }
}
```
