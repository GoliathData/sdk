<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listWorkflowRuns

query · domain `workflows` · requires the READ scope

List runs of one workflow version (by workflowAutomationId), optionally by run status (PENDING | RUNNING | COMPLETED | PAUSED | STOPPED | FAILED | NOT_ENROLLED). Run ids feed pauseWorkflowRun / resumeWorkflowRun / stopWorkflowRun. Report each run's reason rather than saying reasons are unavailable: a NOT_ENROLLED run was refused at the door and never entered, and its `stoppedReason` says why (a STOPPED run's says why it was withdrawn); a PAUSED run carries `pausedReason`, plus `sendFailureCode` (the carrier code, e.g. 30007) when a failed text paused it, and `pauseCause` (the code behind it, e.g. MISSING_VARIABLES, TEMPLATE_INVALID, INSUFFICIENT_CREDITS, NO_POINT_PERSON) when one was recorded; `currentNodeId` is the step the run rests on: name it from the node with that id in getWorkflowVersionGraph's graph (its type and name). On a NODE_ERROR pause it is the step that failed and Resume retries it once fixed; on a SEND_FAILED / CARRIER_FILTERED / SENDER_UNAVAILABLE pause it can be a step AFTER the failed send, so call it where the run is paused, not the failed step; null means no step is recorded: say so. A NODE_ERROR with a null `pauseCause` names no cause here: say which step and that its detail is not exposed, never invent one; a PENDING run whose next send waits carries `queuedSend.reason` (DAILY_CAP | SEND_WINDOW | WINDOW_LIMIT | OUT_OF_SMS_CREDITS, null when the wait has no nameable cause; current only on a PENDING run, so go by `pausedReason` on a PAUSED one) and `queuedSend.nextAttemptAt`. A FAILED run has no reason field and an older STOPPED run's `stoppedReason` can be null: say it is not recorded, never invent one. Reasons are raw codes.

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

- The `limit` variable is clamped server-side to a maximum of 28.
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
      "stoppedReason": true,
      "pausedReason": true,
      "pauseCause": true,
      "currentNodeId": true,
      "sendFailureCode": true,
      "queuedSend": {
        "reason": true,
        "nextAttemptAt": true
      },
      "contact": {
        "id": true,
        "name": true
      }
    }
  }
}
```
