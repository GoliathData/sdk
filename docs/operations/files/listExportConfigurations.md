<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listExportConfigurations

query · domain `files` · requires the READ scope

The org's saved export presets (the download dialog's row shapes): id, name, description, and which one is the default the dialog opens with.

## Call

```ts
const result = await client.files.listExportConfigurations()
// → Promise<ListExportConfigurationsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListExportConfigurationsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dataExport": {
    "exportConfigurations": {
      "id": true,
      "name": true,
      "description": true,
      "isDefault": true,
      "updatedAt": true
    }
  }
}
```
