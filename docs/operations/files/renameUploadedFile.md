<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# renameUploadedFile

mutation · domain `files` · requires the WRITE scope

Rename an uploaded file (listFiles `uploads[].file.id`, or a deal's or contact's file).

## Call

```ts
const result = await client.files.renameUploadedFile({ uploadedFileId: '<text>', name: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RenameUploadedFileMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RenameUploadedFileMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `uploadedFileId` | `String!` | yes | — |
| `name` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "fileUpload": {
    "updateFileName": {
      "id": true,
      "fileName": true
    }
  }
}
```
