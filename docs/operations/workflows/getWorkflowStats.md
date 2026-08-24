<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getWorkflowStats

query · domain `workflows` · requires the READ scope

Performance summary for one workflow (by group id), lifetime, dry runs excluded: run counts by outcome (active/completed/paused/stopped/failed), messages sent, reply rate + positive/negative split, bounce rate, and last-run time. The headline "how is this automation doing" answer.

## Call

```ts
const result = await client.workflows.getWorkflowStats({ workflowGroupId: '<id>' })
// → Promise<GetWorkflowStatsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetWorkflowStatsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
      "status": true,
      "stats": {
        "totalRuns": true,
        "lastRunAt": true,
        "activeRuns": true,
        "completedRuns": true,
        "pausedRuns": true,
        "stoppedRuns": true,
        "failedRuns": true,
        "messagesSent": true,
        "replyRate": true,
        "bounceRate": true,
        "positiveReplyRate": true,
        "negativeReplyRate": true,
        "runsThatSentMessageCount": true,
        "runsWithResponseCount": true
      }
    }
  }
}
```
