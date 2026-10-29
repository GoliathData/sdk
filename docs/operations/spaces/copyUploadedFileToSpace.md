<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# copyUploadedFileToSpace

mutation · domain `spaces` · requires the WRITE scope

Copy an upload's original file (listFiles `uploads[].file.id`) into a folder or root you can edit, as Uploads' "Copy to My files" does: a new file of your own, independent of the upload. Needs EDITOR there.

## Call

```ts
const result = await client.spaces.copyUploadedFileToSpace({ input: <CopyUploadedFileIntoSpaceInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CopyUploadedFileToSpaceMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CopyUploadedFileToSpaceMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `CopyUploadedFileIntoSpaceInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "copyUploadedFile": {
      "id": true,
      "spaceId": true,
      "parentId": true,
      "name": true,
      "fileType": true,
      "sizeBytes": true,
      "path": {
        "id": true,
        "name": true
      }
    }
  }
}
```
