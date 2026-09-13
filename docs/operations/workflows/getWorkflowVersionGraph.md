<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getWorkflowVersionGraph

query · domain `workflows` · requires the READ scope

Fetch one workflow VERSION by its workflowAutomationId (from getWorkflow.versions/currentVersion/pendingDraft) including its full node/edge graph — the superjson-serialized WorkflowGraph the editor reads and updateWorkflowGraph writes back. The graph's `triggers` array shows what starts runs (see updateWorkflowGraph for the trigger config shapes, the FULL authorable node vocabulary — far more than text steps — and how to add/remove them). Read `graph.config` too before answering anything about BEHAVIOUR rather than steps: exit conditions, send window / quiet hours, sender selection and the trigger operator all live there, not on any node — updateWorkflowGraph documents the vocabulary. WEBHOOK SECRETS ARE REDACTED. A `send_webhook_action` step's `config.auth.secret` comes back as the literal `__GOLIATH_WEBHOOK_SECRET_REDACTED__` — never the real credential, and never something to quote to a user or reason about as a value. Send that exact string BACK UNCHANGED in updateWorkflowGraph and the stored secret is kept; send a different string only when the user is deliberately rotating it. Do NOT invent, guess or complete a replacement: that overwrites a working credential. A redacted secret on a step with no stored secret behind it (a step you just added, or a graph read long enough ago that its node ids have rotated) is REFUSED, so re-read the graph and carry the sentinel from the fresh copy. 

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
      "channels": true,
      "workflowDomain": true,
      "stepKinds": true,
      "graph": true
    }
  }
}
```
