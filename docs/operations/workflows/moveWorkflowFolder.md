<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# moveWorkflowFolder

mutation · domain `workflows` · requires the WRITE scope

Move a workflow folder under another folder, or pass parentFolderId null to move it to the root.

## Call

```ts
const result = await client.workflows.moveWorkflowFolder({ folderId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<MoveWorkflowFolderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `MoveWorkflowFolderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `folderId` | `ID!` | yes | — |
| `parentFolderId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "moveWorkflowFolder": {
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
