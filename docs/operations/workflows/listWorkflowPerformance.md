<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listWorkflowPerformance

query · domain `workflows` · requires the READ scope

Scoreboard: the org's workflows (paginated, non-archived) each with headline stats — total/active/completed runs, reply rate, and last-run time. One call to answer "which of my automations are running and how are they doing". Drill into any with getWorkflowStats.

## Call

```ts
const result = await client.workflows.listWorkflowPerformance()
// → Promise<ListWorkflowPerformanceQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListWorkflowPerformanceQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `limit` | `Int` | no | 20 |
| `offset` | `Int` | no | 0 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "workflowGroupsPage": {
      "items": {
        "id": true,
        "name": true,
        "status": true,
        "workflowType": true,
        "workflowDomain": true,
        "stats": {
          "totalRuns": true,
          "activeRuns": true,
          "completedRuns": true,
          "replyRate": true,
          "lastRunAt": true
        }
      },
      "total": true
    }
  }
}
```
