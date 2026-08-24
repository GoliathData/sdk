<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# pauseWorkflowRun

mutation · domain `workflows` · requires the WRITE scope

Pause one in-flight run (PENDING or RUNNING → PAUSED). Get run ids from listWorkflowRuns.

## Call

```ts
const result = await client.workflows.pauseWorkflowRun({ workflowAutomationRunId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<PauseWorkflowRunMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PauseWorkflowRunMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowAutomationRunId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "pauseWorkflowRun": {
      "id": true,
      "status": true
    }
  }
}
```
