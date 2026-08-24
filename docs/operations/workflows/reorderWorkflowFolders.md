<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# reorderWorkflowFolders

mutation · domain `workflows` · requires the WRITE scope

Persist the display order for one sibling set. Pass parentFolderId (null for root) and every folderId in that set.

## Call

```ts
const result = await client.workflows.reorderWorkflowFolders({ folderIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ReorderWorkflowFoldersMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ReorderWorkflowFoldersMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `parentFolderId` | `ID` | no | — |
| `folderIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "reorderWorkflowFolders": {
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
