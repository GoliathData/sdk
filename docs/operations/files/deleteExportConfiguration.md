<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteExportConfiguration

mutation · domain `files` · requires the WRITE scope

Delete an export preset for the whole org, for good (listExportConfigurations id). Exports already made keep their files. Returns false when nothing matched.

## Call

```ts
const result = await client.files.deleteExportConfiguration({ id: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteExportConfigurationMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteExportConfigurationMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `id` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "exportMutation": {
    "deleteExportConfiguration": true
  }
}
```
