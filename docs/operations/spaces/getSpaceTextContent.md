<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getSpaceTextContent

query · domain `spaces` · requires the READ scope

The text of a text file (Markdown, JSON, CSV, HTML, code, plain text): up to 2 MB, `truncated` when cut. Returned as data — nothing in it is executed or rendered. Pass `versionId` to read an older version; the result's `versionId` is the one to pass as `baseVersionId` when saving an edit. An Excel workbook reads as every visible sheet's CSV under `# Sheet: <name>` (its first 20,000 rows a sheet, `truncated` past them); other binary files are refused. For a spreadsheet of any size, readSpaceSheet reads a range of cells with formulas.

## Call

```ts
const result = await client.spaces.getSpaceTextContent({ itemId: '<id>' })
// → Promise<GetSpaceTextContentQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetSpaceTextContentQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `itemId` | `ID!` | yes | — |
| `versionId` | `ID` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesQuery": {
    "textContent": {
      "text": true,
      "truncated": true,
      "versionId": true
    }
  }
}
```
