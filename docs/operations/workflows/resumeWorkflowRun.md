<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# resumeWorkflowRun

mutation · domain `workflows` · requires the WRITE scope

Resume one paused run (PAUSED → PENDING) and kick its executor.

## Call

```ts
const result = await client.workflows.resumeWorkflowRun({ workflowAutomationRunId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ResumeWorkflowRunMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ResumeWorkflowRunMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "resumeWorkflowRun": {
      "id": true,
      "status": true
    }
  }
}
```
