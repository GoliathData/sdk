<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# startLibraryFileRun

mutation · domain `libraryFileRuns` · requires the WRITE scope

Start a run on a Library file (a .csv, .xlsx or .xls spreadsheet; spaceItemId from the chat trailer or searchSpaceItems): a skip trace finds owner phones and emails, a tag puts its properties on a list (a contact import is startContactImport). skipTrace is true for a SKIPTRACE run and false for TAG_PROPERTIES. Returns the run (fileProcessingTaskId); it shows on the file in Files. Nothing runs yet: map it next (mapLibraryFileRun). A retry in this chat returns the run it already started.

## Call

```ts
const result = await client.libraryFileRuns.startLibraryFileRun({ spaceItemId: '<id>', skipTrace: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<StartLibraryFileRunMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `StartLibraryFileRunMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `spaceItemId` | `ID!` | yes | — |
| `skipTrace` | `Boolean!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "fileProcessingTaskMutation": {
    "skipTraceRun": {
      "fileProcessingTaskId": true
    },
    "tagRun": {
      "fileProcessingTaskId": true
    }
  }
}
```
