<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# confirmLibraryFileRun

mutation · domain `libraryFileRuns` · requires the WRITE scope

Run it: the step the Files review's confirm runs. A skip trace spends credits and adds the phones and emails to the file as a new version; a tag puts the properties on tagName's list. skipTrace is true for a SKIPTRACE run and false for TAG_PROPERTIES. Only after the person said yes to this run. It starts in the background and returns at once.

## Call

```ts
const result = await client.libraryFileRuns.confirmLibraryFileRun({ fileProcessingTaskId: '<id>', skipTrace: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ConfirmLibraryFileRunMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ConfirmLibraryFileRunMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `fileProcessingTaskId` | `ID!` | yes | — |
| `skipTrace` | `Boolean!` | yes | — |
| `tagName` | `String` | no | — |
| `exportFileName` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "fileProcessingTaskMutation": {
    "skipTraceRun": {
      "id": true,
      "status": true
    },
    "tagRun": {
      "id": true,
      "status": true
    }
  }
}
```
