<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# moveAndResumeParkedRuns

mutation · domain `workflows` · requires the WRITE scope

Restart the runs a publish paused on a workflow (getWorkflow runsParkedByPublish; mostly publishes before 2026-10-23, which paused everyone in flight): moves up to `limit` (at most 200) of them onto the live version, still paused, and once `remaining` is 0 resumes them all on the live version, so their messages go out again. A run on a step the live version no longer has is finished instead (`completed`). Call again while `remaining` is above 0, unless `stuck`: then those runs cannot be moved, so say how many and stop. Offer it only when the person asks about that workflow's paused runs, and say how many people will start getting messages again first. With no live version it does nothing and returns `notLive`: the workflow has to be turned back on first. A run whose contact replied while parked stays paused.

## Call

```ts
const result = await client.workflows.moveAndResumeParkedRuns({ workflowGroupId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<MoveAndResumeParkedRunsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `MoveAndResumeParkedRunsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |
| `limit` | `Int` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "moveAndResumeParkedRuns": {
      "moved": true,
      "completed": true,
      "remaining": true,
      "stuck": true,
      "notLive": true,
      "parkedCount": true,
      "estimatedCount": true,
      "bulkTaskId": true
    }
  }
}
```
