<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listLibraryFiles

query · domain `workflows` · requires the READ scope

List the content library's files (Automations → Templates → Files): id, name, description, folderId, contentType. Optional folderId (listContentTemplateFolders) and name search.

## Call

```ts
const result = await client.workflows.listLibraryFiles()
// → Promise<ListLibraryFilesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListLibraryFilesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `folderId` | `ID` | no | — |
| `search` | `String` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "libraryFiles": {
      "id": true,
      "name": true,
      "description": true,
      "folderId": true,
      "contentType": true,
      "updatedAt": true
    }
  }
}
```
