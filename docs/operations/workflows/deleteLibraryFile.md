<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteLibraryFile

mutation · domain `workflows` · requires the WRITE scope

Take a file out of the library for good (its name and description go). The upload itself stays, and templates that attach it keep working.

## Call

```ts
const result = await client.workflows.deleteLibraryFile({ fileId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteLibraryFileMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteLibraryFileMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `fileId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "deleteLibraryFile": {
      "libraryFiles": {
        "id": true
      }
    }
  }
}
```
