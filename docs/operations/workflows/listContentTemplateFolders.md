<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listContentTemplateFolders

query · domain `workflows` · requires the READ scope

List the organization's template folders (id, name, template count).

## Call

```ts
const result = await client.workflows.listContentTemplateFolders()
// → Promise<ListContentTemplateFoldersQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListContentTemplateFoldersQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "listContentTemplateFolders": {
      "id": true,
      "name": true,
      "parentFolderId": true,
      "templateCount": true,
      "displayOrder": true
    }
  }
}
```
