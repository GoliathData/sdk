<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listWorkflowRunErrors

query · domain `deliveryHealth` · requires the READ scope

Every workflow's runs in the organization that FAILED or are PAUSED (statuses to narrow), newest first, each with its workflow (workflowAutomation id and name) and contact: failureReason (why a FAILED run failed, a code such as RESCUES_SPENT; null on an older run), pausedReason, pauseCause and sendFailureCode (a PAUSED run's, as listWorkflowRuns words them), stoppedReason, and currentNodeId (the step; getWorkflowVersionGraph names it). A run's error text is never exposed. One workflow's runs: listWorkflowRuns.

## Call

```ts
const result = await client.deliveryHealth.listWorkflowRunErrors()
// → Promise<ListWorkflowRunErrorsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListWorkflowRunErrorsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `statuses` | `[WorkflowAutomationRunStatus!]` | no | [FAILED, PAUSED] |
| `limit` | `Int` | no | 25 |
| `offset` | `Int` | no | 0 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 25.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "listWorkflowRuns": {
      "id": true,
      "status": true,
      "createdAt": true,
      "updatedAt": true,
      "failureReason": true,
      "stoppedReason": true,
      "pausedReason": true,
      "pauseCause": true,
      "sendFailureCode": true,
      "currentNodeId": true,
      "workflowAutomation": {
        "id": true,
        "name": true
      },
      "contact": {
        "id": true,
        "name": true
      }
    }
  }
}
```
