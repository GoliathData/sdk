<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listWorkflowRuns

query · domain `workflows` · requires the READ scope

List runs of one workflow version (by workflowAutomationId), optionally filtered by run status (PENDING | RUNNING | COMPLETED | PAUSED | STOPPED | FAILED | NOT_ENROLLED). Returns run ids for pauseWorkflowRun / resumeWorkflowRun / stopWorkflowRun. Runs carry the reason their status has one for — report those per run rather than saying reasons are unavailable: a NOT_ENROLLED run was refused at the door and never entered the workflow, and its `stoppedReason` says why enrollment was refused (a STOPPED run's says why it was withdrawn); a PAUSED run carries `pausedReason`, plus `sendFailureCode` (the carrier code, e.g. 30007) when a failed text paused it; a PENDING run whose next send is waiting carries `queuedSend.reason` (only a PENDING run's is current — on a PAUSED run go by `pausedReason`) — what it waits on: DAILY_CAP | SEND_WINDOW | WINDOW_LIMIT | OUT_OF_SMS_CREDITS (null when the wait has no nameable cause) — and `queuedSend.nextAttemptAt`. A FAILED run carries no reason field, and an older STOPPED run's `stoppedReason` can be null: say the reason is not recorded rather than inventing one. Reasons are raw codes.

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

- The `limit` variable is clamped server-side to a maximum of 34.
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
