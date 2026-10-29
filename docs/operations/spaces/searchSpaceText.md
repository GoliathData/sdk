<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# searchSpaceText

query · domain `spaces` · requires the READ scope

Find words INSIDE one text file: the numbered lines (`N| line`) holding any of `terms` (case-insensitive, matches inside longer words), with `contextLines` (default 2) around each and `…` between blocks — one read instead of paging a long file with getSpaceTextLines. Pass a few variants of the idea ("hire", "hiring", "recruit"). `matchedLines` counts every hit; `truncated` means some were left out for space — narrow the terms or read around a hit with getSpaceTextLines.

## Call

```ts
const result = await client.spaces.searchSpaceText({ itemId: '<id>', terms: ['<text>'] })
// → Promise<SearchSpaceTextQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SearchSpaceTextQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `itemId` | `ID!` | yes | — |
| `terms` | `[String!]!` | yes | — |
| `contextLines` | `Int` | no | — |
| `versionId` | `ID` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesQuery": {
    "textSearch": {
      "versionId": true,
      "totalLines": true,
      "matchedLines": true,
      "truncated": true,
      "text": true
    }
  }
}
```
