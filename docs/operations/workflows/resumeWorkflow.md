<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# resumeWorkflow

mutation · domain `workflows` · requires the WRITE scope

Resume the most-recently-paused version of a workflow. No-op if a version is already active or none is paused.

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
