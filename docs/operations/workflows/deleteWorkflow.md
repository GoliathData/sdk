<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteWorkflow

mutation · domain `workflows` · requires the WRITE scope

Delete a workflow (soft delete — the UI's "Delete" action). Archives the group, pauses any active version, and stops its in-flight runs. The re-queried group confirms deletion via archivedAt.

## Call

```ts
const result = await client.workflows.deleteWorkflow({ workflowGroupId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteWorkflowMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteWorkflowMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "softDeleteWorkflowGroup": {
      "workflowGroup": {
        "id": true,
        "status": true,
        "archivedAt": true
      }
    }
  }
}
```
