<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# filterSpaceSheet

mutation · domain `spaces` · requires the WRITE scope

A filtered list from a spreadsheet as a NEW CSV beside it, every row read on the server. Use it for any "the rows where…" job; never retype readSpaceSheet rows into a file or split the job up. `columns`: headers to keep (`as` renames); `where`: conditions all kept rows meet (EMPTY, NOT_EMPTY, or EQUALS, NOT_EQUALS, CONTAINS, NOT_CONTAINS with `values`). A repeated group is `{n}` ("Phone {n} Type") with `repeat` ["1","2","3"]: one row per value that passes; column `{n}` outputs it. Report the returned counts.

## Call

```ts
const result = await client.spaces.filterSpaceSheet({ input: <FilterSpaceSheetInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<FilterSpaceSheetMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `FilterSpaceSheetMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `FilterSpaceSheetInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "filterSheet": {
      "sheet": true,
      "columns": true,
      "rowsRead": true,
      "rowsWritten": true,
      "duplicatesDropped": true,
      "rowsPerRepeat": {
        "value": true,
        "rows": true
      },
      "preview": true,
      "item": {
        "id": true,
        "name": true,
        "fileType": true,
        "sizeBytes": true,
        "spaceId": true,
        "parentId": true
      }
    }
  }
}
```
