<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setDefaultExportConfiguration

mutation · domain `files` · requires the WRITE scope

Make one export preset (listExportConfigurations id) the org's default in the download dialog, for everyone.

## Call

```ts
const result = await client.files.setDefaultExportConfiguration({ id: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetDefaultExportConfigurationMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetDefaultExportConfigurationMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "setDefaultExportConfiguration": {
      "id": true,
      "name": true,
      "isDefault": true
    }
  }
}
```
