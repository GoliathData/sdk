<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# resumeRunsPausedWithWorkflow

mutation · domain `workflows` · requires the WRITE scope

Wake the runs a workflow pause left parked (getWorkflow runsPausedWithWorkflow) on a workflow that is live again; each restarts at the step it reached and its messages go out. Never turns the workflow on: refused when it has no live version. Runs paused for any other reason stay paused. Say how many runs first.

## Call

```ts
const result = await client.workflows.resumeRunsPausedWithWorkflow({ workflowGroupId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ResumeRunsPausedWithWorkflowMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ResumeRunsPausedWithWorkflowMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "resumeRunsPausedWithWorkflow": {
      "id": true,
      "status": true,
      "runsPausedWithWorkflow": true
    }
  }
}
```
