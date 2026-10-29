<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# editSpaceSheetCells

mutation · domain `spaces` · requires the WRITE scope

Change cells of a spreadsheet (.xlsx, CSV, TSV) by A1 address as one new version, without re-sending the sheet: each of `edits` writes `values` (rows of cells) right and down from its `start` cell — a value, a formula (`=SUM(B2:B9)`) or "" to clear — and `appendRows` adds rows under the last filled row. Every other cell, sheet, hidden sheet, number format, column width and row height stays as it was, and every formula on the sheet is computed again (one over another sheet keeps the value Excel saved), so read it back with readSpaceSheet for totals. A value is written as typed: a plain number as a number, anything else (a date, "$1,200") as text. Pass the `versionId` readSpaceSheet returned as `baseVersionId`: a save since is refused. At most 10,000 cells per call. An .xlsx with charts, images, pivot tables, comments, Excel tables, macros, conditional formatting, data validation, sparklines, links to other workbooks, data connections, slicers or embedded objects is refused (a save would drop them); cell colours and fonts are not kept, as when it is edited in Library.

## Call

```ts
const result = await client.spaces.editSpaceSheetCells({ input: <EditSpaceSheetCellsInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<EditSpaceSheetCellsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `EditSpaceSheetCellsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `EditSpaceSheetCellsInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "editSheetCells": {
      "sheet": true,
      "cellsChanged": true,
      "rowsAppended": true,
      "rowCount": true,
      "columnCount": true,
      "item": {
        "id": true,
        "name": true,
        "fileType": true,
        "sizeBytes": true,
        "currentVersion": {
          "id": true,
          "versionNumber": true
        }
      }
    }
  }
}
```
