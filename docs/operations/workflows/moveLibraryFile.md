<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# moveLibraryFile

mutation · domain `workflows` · requires the WRITE scope

File a library file into a folder (listContentTemplateFolders), or folderId null for the root.

## Call

```ts
const result = await client.workflows.moveLibraryFile({ fileId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<MoveLibraryFileMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `MoveLibraryFileMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `fileId` | `ID!` | yes | — |
| `folderId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "moveLibraryFile": {
      "id": true,
      "folderId": true
    }
  }
}
```
