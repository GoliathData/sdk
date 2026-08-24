<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# stopWorkflowRun

mutation · domain `workflows` · requires the WRITE scope

Permanently stop one run (terminal — a stopped run cannot be resumed).

## Call

```ts
const result = await client.workflows.stopWorkflowRun({ workflowAutomationRunId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<StopWorkflowRunMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `StopWorkflowRunMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "stopWorkflowRun": {
      "id": true,
      "status": true
    }
  }
}
```
