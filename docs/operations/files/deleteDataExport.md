<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteDataExport

mutation · domain `files` · requires the WRITE scope

Dismiss a FAILED standalone export from the Files list (the row is kept for the record). Any other export is refused as not found.

## Call

```ts
const result = await client.files.deleteDataExport({ dataExportId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteDataExportMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteDataExportMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `dataExportId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "exportMutation": {
    "deleteDataExport": true
  }
}
```
