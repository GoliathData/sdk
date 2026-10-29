<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listUploadReportRows

query · domain `files` · requires the READ scope

The rows of one upload's report in one `bucket` (ALL_ROWS, CREATED, MATCHED, RESTORED, MERGED_AFTER_IMPORT, DUPLICATE_ROWS, SKIPPED, FAILED): the row number, its outcome and reason, the original CSV row, and the contact or property it became. Page with limit/offset; `total` counts the bucket. A later step on these contacts acts on each row's `contact.id`, never a lookup by name (two contacts can share one).

## Call

```ts
const result = await client.files.listUploadReportRows({ fileProcessingTaskId: '<id>', bucket: <UploadReportBucket> })
// → Promise<ListUploadReportRowsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListUploadReportRowsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `fileProcessingTaskId` | `ID!` | yes | — |
| `bucket` | `UploadReportBucket!` | yes | — |
| `limit` | `Int` | no | 25 |
| `offset` | `Int` | no | 0 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 100.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "fileProcessingTaskQuery": {
    "uploadReportRows": {
      "total": true,
      "items": {
        "rowNumber": true,
        "outcome": true,
        "outcomeReason": true,
        "notStored": true,
        "duplicateOfRowNumber": true,
        "csvRowJson": true,
        "contact": {
          "id": true,
          "name": true,
          "phoneNumbers": {
            "phoneNumber": true
          },
          "emails": {
            "email": true
          }
        },
        "property": {
          "id": true,
          "formattedAddress": true
        }
      }
    }
  }
}
```
