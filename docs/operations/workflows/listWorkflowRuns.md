<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listWorkflowRuns

query · domain `workflows` · requires the READ scope

List runs of one workflow version (by workflowAutomationId), optionally filtered by run status (PENDING | RUNNING | COMPLETED | PAUSED | STOPPED | FAILED). Returns run ids for pauseWorkflowRun / resumeWorkflowRun / stopWorkflowRun.

## Call

```ts
const result = await client.workflows.listWorkflowRuns({ workflowAutomationId: '<id>' })
// → Promise<ListWorkflowRunsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListWorkflowRunsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowAutomationId` | `ID!` | yes | — |
| `statuses` | `[WorkflowAutomationRunStatus!]` | no | — |
| `limit` | `Int` | no | 20 |
| `offset` | `Int` | no | 0 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "listWorkflowRuns": {
      "id": true,
      "status": true,
      "dryRun": true,
      "createdAt": true,
      "updatedAt": true,
      "scheduledExecution": true,
      "contact": {
        "id": true,
        "name": true
      }
    }
  }
}
```
