<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getWorkflowVersionStats

query · domain `workflows` · requires the READ scope

Performance summary for one specific VERSION (by workflowAutomationId, from getWorkflow.versions). Same shape as getWorkflowStats, scoped to a single version — use it to compare a new version against the one it replaced.

## Call

```ts
const result = await client.workflows.getWorkflowVersionStats({ workflowAutomationId: '<id>' })
// → Promise<GetWorkflowVersionStatsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetWorkflowVersionStatsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowAutomationId` | `ID!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "workflowAutomation": {
      "id": true,
      "name": true,
      "status": true,
      "stats": {
        "totalRuns": true,
        "activeRuns": true,
        "completedRuns": true,
        "pausedRuns": true,
        "stoppedRuns": true,
        "failedRuns": true,
        "messagesSent": true,
        "sentEmailCount": true,
        "sentTextCount": true,
        "bouncedEmailCount": true,
        "failedTextCount": true,
        "replyRate": true,
        "bounceRate": true,
        "positiveReplyRate": true,
        "negativeReplyRate": true,
        "positiveReplyCount": true,
        "negativeReplyCount": true,
        "genuineReplyCount": true,
        "optOutReplyCount": true,
        "unreachableReplyCount": true
      }
    }
  }
}
```
