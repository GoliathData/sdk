<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# describeWorkflowRun

query · domain `workflows` · requires the READ scope

One record's run of a workflow, step by step: steps entered and when, branches taken, where it is now, why it stopped or paused (`stopReason`) and whether it may be enrolled again (`canReenroll`; say both), and who enrolled it (`enrolledHow`, `enrolledBy`). Give `workflowAutomationRunId`, or `recordName` for the newest run you may open whose record matches.

## Call

```ts
const result = await client.workflows.describeWorkflowRun({ workflowGroupId: '<id>' })
// → Promise<DescribeWorkflowRunQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DescribeWorkflowRunQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |
| `workflowAutomationRunId` | `ID` | no | — |
| `recordName` | `String` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "workflowRunStory": {
      "ok": true,
      "diagnostics": true,
      "workflowAutomationRunId": true,
      "status": true,
      "record": true,
      "history": true,
      "enrolledHow": true,
      "enrolledBy": true,
      "stopReason": true,
      "canReenroll": true
    }
  }
}
```
