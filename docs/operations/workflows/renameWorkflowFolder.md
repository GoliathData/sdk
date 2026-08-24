<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# renameWorkflowFolder

mutation · domain `workflows` · requires the WRITE scope

Rename a workflow folder by folderId. Duplicate sibling names are rejected rather than merging subtrees.

## Call

```ts
const result = await client.workflows.renameWorkflowFolder({ folderId: '<id>', name: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RenameWorkflowFolderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RenameWorkflowFolderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `folderId` | `ID!` | yes | — |
| `name` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "renameWorkflowFolder": {
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
}
```
