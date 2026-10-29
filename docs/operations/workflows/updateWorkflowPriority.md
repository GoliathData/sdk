<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateWorkflowPriority

mutation · domain `workflows` · requires the WRITE scope

Set a workflow's priority, which orders its runs and sends against the org's other workflows (higher wins): 1.25 Low, 1.5 Normal (the default), 1.75 High; any other value is refused. Takes a version id (getWorkflow currentVersion.id); applies to the whole workflow at once, live included, and re-orders sends already queued.

## Call

```ts
const result = await client.workflows.updateWorkflowPriority({ workflowAutomationId: '<id>', priority: 0 }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateWorkflowPriorityMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateWorkflowPriorityMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowAutomationId` | `ID!` | yes | — |
| `priority` | `Float!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "updateWorkflowAutomationPriority": {
      "id": true,
      "workflowGroup": {
        "id": true,
        "priority": true
      }
    }
  }
}
```
