<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# restoreWorkflow

mutation · domain `workflows` · requires the WRITE scope

Undo deleteWorkflow: bring a deleted (archived) workflow back to the list, by group id, to edit again. Nothing turns on: every version stays paused until resumeWorkflow, and the runs the delete stopped stay stopped. Use it rather than a duplicate when a just-deleted draft is the one you need. A workflow not deleted comes back unchanged. Refused for an event workflow (its webhook address was retired) and an appointment reminder.

## Call

```ts
const result = await client.workflows.restoreWorkflow({ workflowGroupId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RestoreWorkflowMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RestoreWorkflowMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "restoreWorkflowGroup": {
      "id": true,
      "name": true,
      "status": true,
      "archivedAt": true
    }
  }
}
```
