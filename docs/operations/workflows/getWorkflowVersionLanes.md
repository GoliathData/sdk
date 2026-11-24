<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getWorkflowVersionLanes

query · domain `workflows` · requires the READ scope

Fetch one Workflows v2 version (`workflowAutomationId`, from getWorkflow.versions/currentVersion/pendingDraft) as the editor draws it: its LANES, one per record type it runs on. Read this when getWorkflowVersionGraph refuses a version as not drawable (WORKFLOW_NOT_DRAWABLE: several lanes, or a hand-off). Returns `workflowGroupId`, `lanes` (superjson `{lanes: [...]}`, in lane order), `readOnlyNodeIds` (steps drawn read-only, in every lane), `updatedAt` (the token updateWorkflowLanes takes as `expectedUpdatedAt`) and `createdAt`. A lane is {legId, laneName, domain, config, triggers, nodes, edges, entries} and its own header (workflowAutomationId, name, priority, status, systemCategory, userId, organizationId): one record type's graph (nodes {id, type, config}, edges {id, parentNodeId, childNodeId, config}, as getWorkflowVersionGraph's), its own trigger node, `entries` the ways in at a later step ({id, stepId, triggers, triggerOperator, triggerWindow}). A `wf_v2_read_only_step` node is a step this editor carries whole: send it back byte for byte. Send each lane back as read, its header included (a lane whose `workflowAutomationId` is missing or not the version being saved is refused, naming its legId), and each trigger with its `createdAt`/`updatedAt` (ISO strings are fine). Webhook secrets read as a sentinel: send it back unchanged. On Workflows v1: WORKFLOWS_V2_NOT_AVAILABLE_HERE.

## Call

```ts
const result = await client.workflows.getWorkflowVersionLanes({ workflowAutomationId: '<id>' })
// → Promise<GetWorkflowVersionLanesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetWorkflowVersionLanesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "workflowAutomationLanes": {
      "workflowGroupId": true,
      "lanes": true,
      "readOnlyNodeIds": true,
      "updatedAt": true,
      "createdAt": true
    }
  }
}
```
