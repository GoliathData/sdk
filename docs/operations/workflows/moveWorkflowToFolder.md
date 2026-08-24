<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# moveWorkflowToFolder

mutation · domain `workflows` · requires the WRITE scope

Move a workflow into a folder by folderId (from listWorkflowFolders), or pass folderId null to ungroup it. Creates nothing — an unknown id is NOT_FOUND, so make the folder with createWorkflowFolder first. Refuses a workflow the caller cannot edit, and one managed by a campaign — that sequence belongs to the Campaigns editor.

## Call

```ts
const result = await client.workflows.moveWorkflowToFolder({ workflowGroupId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<MoveWorkflowToFolderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `MoveWorkflowToFolderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |
| `folderId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "moveWorkflowToFolder": {
      "id": true,
      "name": true,
      "folderId": true,
      "status": true
    }
  }
}
```
