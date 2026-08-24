<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteWorkflowFolder

mutation · domain `workflows` · requires the WRITE scope

Delete a workflow folder by folderId. Its direct workflows and child folders move to its parent; nothing inside is deleted.

## Call

```ts
const result = await client.workflows.deleteWorkflowFolder({ folderId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteWorkflowFolderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteWorkflowFolderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `folderId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "deleteWorkflowFolder": {
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
