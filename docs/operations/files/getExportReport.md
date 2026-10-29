<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getExportReport

query · domain `files` · requires the READ scope

One export's report, by `dataExportId` (a listFiles `downloads` id, or the one a bulk task returns): its type, rows, the saved filter it was run from, and its skip-trace and enrichment outcomes and spend. It never reads the file, so it cannot say which columns or phone numbers the file holds.

## Call

```ts
const result = await client.files.getExportReport({ dataExportId: '<id>' })
// → Promise<GetExportReportQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetExportReportQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `dataExportId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dataExport": {
    "exportReport": {
      "dataExportId": true,
      "fileName": true,
      "exportType": true,
      "createdAt": true,
      "numRows": true,
      "filterId": true,
      "filterName": true,
      "filterDomain": true,
      "skiptrace": {
        "wasBilled": true,
        "netSpent": true,
        "found": true,
        "foundNothing": true,
        "failed": true,
        "notRunYet": true,
        "notTraced": true
      },
      "enrich": {
        "enriched": true,
        "enrichNoResult": true,
        "alreadyEnriched": true,
        "failed": true,
        "pending": true,
        "relatedPeopleAdded": true
      }
    }
  }
}
```
