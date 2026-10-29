<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateLibraryFile

mutation · domain `workflows` · requires the WRITE scope

Rename a library file or change its description (fileId from listLibraryFiles); description null clears it.

## Call

```ts
const result = await client.workflows.updateLibraryFile({ fileId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateLibraryFileMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateLibraryFileMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `fileId` | `ID!` | yes | — |
| `name` | `String` | no | — |
| `description` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "updateLibraryFile": {
      "id": true,
      "name": true,
      "description": true
    }
  }
}
```
