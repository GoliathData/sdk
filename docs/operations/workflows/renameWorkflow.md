<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# renameWorkflow

mutation · domain `workflows` · requires the WRITE scope

Rename a workflow version (by workflowAutomationId) and optionally update its description. The workflow list shows the display version's name.

## Call

```ts
const result = await client.workflows.renameWorkflow({ workflowAutomationId: '<id>', name: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RenameWorkflowMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RenameWorkflowMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowAutomationId` | `ID!` | yes | — |
| `name` | `String!` | yes | — |
| `description` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "updateWorkflowAutomationName": {
      "id": true,
      "name": true,
      "description": true,
      "status": true
    }
  }
}
```
