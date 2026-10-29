<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# patchWorkflowGraph

mutation · domain `workflows` · requires the WRITE scope

Edit a workflow version's graph by sending ONLY THE CHANGE (updateWorkflowGraph writes a whole new graph). Ids come from getWorkflowVersionGraph and CHANGE ON EVERY SAVE: patch again from the response's `graph`. `graphPatch`: ops applied in order, all or nothing. Ops: {op:"updateNode", id, config?, edits?} | {op:"addNode", node:{type, config}, after?: nodeId, onEdge?: edgeId} | {op:"removeNode", id, keepChild?} | {op:"addEdge", edge:{parentNodeId, childNodeId, config?}} | {op:"updateEdge", id, parentNodeId?, childNodeId?, config?} | {op:"removeEdge", id} | {op:"updateConfig", config} (graph.config) | {op:"addTrigger", trigger:{config}} | {op:"updateTrigger", id, config} | {op:"removeTrigger", id}. A `config` is a JSON merge patch: objects merge, null deletes a key, other values (arrays too) replace; {op:"updateNode", id, config:{seconds:86400}} makes a wait one day. `edits`: [{field:"textBody", find, replace}], each find exactly once in that text. `after` inserts after a step with one path out, `onEdge` on a branch edge; with neither the step is unconnected. A new edge out of a condition sets its config (`eval`/`path`). removeNode rejoins the flow; a condition needs `keepChild` (its other paths go). New step types: updateWorkflowGraph's NODE VOCABULARY. Saves like updateWorkflowGraph (same refusals, flags, draftValidation); a no-op patch is refused.

## Call

```ts
const result = await client.workflows.patchWorkflowGraph({ workflowAutomationId: '<id>', graphPatch: <JSON> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<PatchWorkflowGraphMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PatchWorkflowGraphMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowAutomationId` | `ID!` | yes | — |
| `graphPatch` | `JSON!` | yes | — |
| `expectedUpdatedAt` | `DateTime` | no | — |
| `acknowledgeGraphWeakening` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "updateWorkflowAutomationGraph": {
      "id": true,
      "workflowGroupId": true,
      "status": true,
      "stepKinds": true,
      "updatedAt": true,
      "graph": true,
      "workflowGroup": {
        "id": true,
        "draftValidation": {
          "isValid": true,
          "errors": true
        }
      }
    }
  }
}
```
