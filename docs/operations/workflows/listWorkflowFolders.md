<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listWorkflowFolders

query · domain `workflows` · requires the READ scope

List the organization's shared workflow-folder tree (id, name, parentFolderId, displayOrder, itemCount). The compatibility field `ready` is always true on current servers.

## Call

```ts
const result = await client.workflows.listWorkflowFolders()
// → Promise<ListWorkflowFoldersQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListWorkflowFoldersQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "workflowFolders": {
      "ready": true,
      "folders": {
        "id": true,
        "name": true,
        "displayOrder": true,
        "parentFolderId": true,
        "itemCount": true
      }
    }
  }
}
```
