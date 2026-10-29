<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# readSpaceSheet

query · domain `spaces` · requires the READ scope

A spreadsheet's cells (.xlsx, CSV, TSV) by A1 range — any size, any sheet — instead of reading it whole: `range` B2:F40, C7, A:C (whole columns) or 5:9 (whole rows), default every filled cell; `sheet` by name, default the first. Rows come tab-separated, each led by its row number under a line of column letters, a formula as `=SUM(B2:B9) → 1200` (formula, then the value it shows); a range below row 1, or a `find`, shows row 1 first so the columns are named. Up to 12000 characters a page: `nextStartRow` says where to read on. `find` (a few words, case-insensitive) keeps only the rows holding one, with `matchedRows` counting them all. `sheets` lists every sheet's size; `truncated` means the sheet goes on past the 200,000 rows or 500 columns a read reaches. A formula over another sheet shows the value Excel last saved. Pass the result's `versionId` as `baseVersionId` to editSpaceSheetCells.

## Call

```ts
const result = await client.spaces.readSpaceSheet({ itemId: '<id>' })
// → Promise<ReadSpaceSheetQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ReadSpaceSheetQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `itemId` | `ID!` | yes | — |
| `versionId` | `ID` | no | — |
| `sheet` | `String` | no | — |
| `range` | `String` | no | — |
| `find` | `[String!]` | no | — |
| `maxChars` | `Int` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesQuery": {
    "sheetRange": {
      "versionId": true,
      "sheets": {
        "name": true,
        "rowCount": true,
        "columnCount": true
      },
      "sheet": true,
      "range": true,
      "rowCount": true,
      "columnCount": true,
      "text": true,
      "matchedRows": true,
      "nextStartRow": true,
      "truncated": true
    }
  }
}
```
