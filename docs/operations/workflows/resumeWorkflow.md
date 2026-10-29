<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# resumeWorkflow

mutation · domain `workflows` · requires the WRITE scope

Resume the most-recently-paused version of a workflow, and wake the runs the workflow pause parked (getWorkflow.runsPausedWithWorkflow counts them): each continues at the step it had reached, and runs paused for any other reason (by hand, a publish, a failed send, a reply) stay paused. With a version already active it flips nothing but still wakes that version's workflow-paused runs; no-op if none is paused.

## Call

```ts
const result = await client.workflows.resumeWorkflow({ workflowGroupId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ResumeWorkflowMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ResumeWorkflowMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "resumeMostRecentlyPausedWorkflow": {
      "id": true,
      "name": true,
      "status": true,
      "currentVersion": {
        "id": true,
        "status": true
      }
    }
  }
}
```
