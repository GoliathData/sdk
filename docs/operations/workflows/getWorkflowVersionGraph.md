<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getWorkflowVersionGraph

query · domain `workflows` · requires the READ scope

Fetch one workflow VERSION by its workflowAutomationId (from getWorkflow.versions/currentVersion/pendingDraft) including its full node/edge graph — the superjson-serialized WorkflowGraph the editor reads and updateWorkflowGraph writes back. The graph's `triggers` array shows what starts runs (see updateWorkflowGraph for the trigger config shapes, the FULL authorable node vocabulary — far more than text steps — and how to add/remove them). Read `graph.config` too before answering anything about BEHAVIOUR rather than steps: exit conditions, send window / quiet hours, sender selection and the trigger operator all live there, not on any node — updateWorkflowGraph documents the vocabulary.

## Call

```ts
const result = await client.workflows.getWorkflowVersionGraph({ workflowAutomationId: '<id>' })
// → Promise<GetWorkflowVersionGraphQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetWorkflowVersionGraphQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowAutomationId` | `ID!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "workflowAutomation": {
      "id": true,
      "workflowGroupId": true,
      "name": true,
      "description": true,
      "status": true,
      "workflowType": true,
      "workflowDomain": true,
      "stepKinds": true,
      "graph": true
    }
  }
}
```
