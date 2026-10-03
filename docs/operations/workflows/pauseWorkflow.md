<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# pauseWorkflow

mutation · domain `workflows` · requires the WRITE scope

Pause the ACTIVE version of a workflow — no new runs will start. pauseInFlightRuns=true also pauses runs already in flight; false lets them finish. No-op if nothing is active. TO CHANGE WHAT A WORKFLOW DOES (add a condition, change a trigger, narrow who it acts on), edit its graph: createOrReturnWorkflowDraft → updateWorkflowGraph → promoteWorkflowDraft, then resumeWorkflow if it was paused. Pausing only stops it. Example: a PROPERTY workflow can require a motivation signal before it creates or texts anyone — put a `conditional` step on the `hasSignal` or `propertySignalTypes` property filter fields (listFilterFieldNames lists them) ahead of the `create_contact_action` step. Never tell a user that restricting outreach this way needs human review: it is a graph edit.

## Call

```ts
const result = await client.workflows.pauseWorkflow({ workflowGroupId: '<id>', pauseInFlightRuns: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<PauseWorkflowMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PauseWorkflowMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |
| `pauseInFlightRuns` | `Boolean!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "pauseWorkflow": {
      "id": true,
      "name": true,
      "status": true
    }
  }
}
```
