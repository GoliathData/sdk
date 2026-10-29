<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deletePendingUpload

mutation · domain `files` · requires the WRITE scope

PERMANENTLY remove an upload that is still waiting for review (not yet imported). Returns true; an upload already imported, already gone or not yours is refused with an error, not false. Requires the user's explicit approval.

## Call

```ts
const result = await client.files.deletePendingUpload({ fileProcessingTaskId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeletePendingUploadMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeletePendingUploadMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "deletePendingUpload": true
  }
}
```
