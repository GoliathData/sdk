<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getWorkflow

query · domain `workflows` · requires the READ scope

Fetch one workflow automation by group id — status, versions (a workflow is a stable group holding versioned definitions), the live version, the pending draft, and draft validation state.

## Call

```ts
const result = await client.workflows.getWorkflow({ workflowGroupId: '<id>' })
// → Promise<GetWorkflowQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetWorkflowQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "workflowGroup": {
      "id": true,
      "name": true,
      "description": true,
      "status": true,
      "workflowType": true,
      "workflowDomain": true,
      "systemCategory": true,
      "folderId": true,
      "createdAt": true,
      "updatedAt": true,
      "archivedAt": true,
      "currentVersion": {
        "id": true,
        "name": true,
        "status": true,
        "stepKinds": true
      },
      "pendingDraft": {
        "id": true,
        "name": true,
        "status": true,
        "stepKinds": true
      },
      "versions": {
        "id": true,
        "name": true,
        "status": true,
        "createdAt": true,
        "updatedAt": true
      },
      "draftValidation": {
        "isValid": true,
        "errors": true
      }
    }
  }
}
```
