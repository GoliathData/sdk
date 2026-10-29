<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# renameDataExport

mutation · domain `files` · requires the WRITE scope

Rename an export's file. The contact list or property tag the export made keeps the name it was given.

## Call

```ts
const result = await client.files.renameDataExport({ dataExportId: '<id>', fileName: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RenameDataExportMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RenameDataExportMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `dataExportId` | `ID!` | yes | — |
| `fileName` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "exportMutation": {
    "renameDataExport": {
      "id": true,
      "fileName": true
    }
  }
}
```
