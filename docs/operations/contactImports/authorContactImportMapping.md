<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# authorContactImportMapping

mutation · domain `contactImports` · requires the WRITE scope

Bring an import from startContactImport to a ready mapping when it was not ready yet (transformerAuthoringState IN_PROGRESS, or hasAuthoredTransformer false). It returns at once when the mapping already exists. Same result fields as startContactImport. Nothing is imported.

## Call

```ts
const result = await client.contactImports.authorContactImportMapping({ fileProcessingTaskId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AuthorContactImportMappingMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AuthorContactImportMappingMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `fileProcessingTaskId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "fileProcessingTaskMutation": {
    "authorContactTransformer": {
      "id": true,
      "status": true,
      "transformerAuthoringState": true,
      "hasAuthoredTransformer": true
    }
  }
}
```
