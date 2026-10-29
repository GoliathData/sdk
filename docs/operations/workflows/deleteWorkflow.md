<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteWorkflow

mutation · domain `workflows` · requires the WRITE scope

Delete a workflow (the UI's "Delete"): archives the group, pauses any active version and PERMANENTLY stops its in-flight runs; everyone mid-sequence drops out and restoring the workflow does not bring them back. Confirm with the user first. The re-queried group shows archivedAt. restoreWorkflow undoes the archive (the workflow comes back paused).

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
