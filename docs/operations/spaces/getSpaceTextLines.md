<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getSpaceTextLines

query · domain `spaces` · requires the READ scope

A text file's lines, numbered, a page at a time (`N| line`; up to 12000 characters a page from `startLine`, `totalLines` and `endLine` say where you are). For a file too large for getSpaceTextContent to return whole: read it page by page, passing the FIRST page's `versionId` on every later page so all pages come from one version, then add lines with insertSpaceTextLines by these numbers with that `versionId` as `baseVersionId` (a save since is refused, never mixed in).

## Call

```ts
const result = await client.spaces.getSpaceTextLines({ itemId: '<id>' })
// → Promise<GetSpaceTextLinesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetSpaceTextLinesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `itemId` | `ID!` | yes | — |
| `versionId` | `ID` | no | — |
| `startLine` | `Int` | no | — |
| `maxChars` | `Int` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesQuery": {
    "textLines": {
      "versionId": true,
      "totalLines": true,
      "startLine": true,
      "endLine": true,
      "text": true
    }
  }
}
```
