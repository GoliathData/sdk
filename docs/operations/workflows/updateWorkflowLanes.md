<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateWorkflowLanes

mutation · domain `workflows` · requires the WRITE scope

Save a Workflows v2 DRAFT's lanes, the editor's own save and its validation. Variables: `workflowAutomationId` (the draft version), `workflowLanes` (superjson `{lanes: [...]}`) and `expectedUpdatedAt` (getWorkflowVersionLanes's `updatedAt`; a save since is refused with CONFLICT: re-read and redo). Lanes are saved WHOLE: send every lane from getWorkflowVersionLanes, changed or not; a lane left out of a draft's save is removed. A lane is {legId, laneName, domain, config, triggers, nodes, edges, entries} and its own header (workflowAutomationId, name, priority, status, systemCategory, userId, organizationId): one record type's graph (nodes {id, type, config}, edges {id, parentNodeId, childNodeId, config}, as getWorkflowVersionGraph's), its own trigger node, `entries` the ways in at a later step ({id, stepId, triggers, triggerOperator, triggerWindow}). A `wf_v2_read_only_step` node is a step this editor carries whole: send it back byte for byte. Send each lane back as read, its header included (a lane whose `workflowAutomationId` is missing or not the version being saved is refused, naming its legId), and each trigger with its `createdAt`/`updatedAt` (ISO strings are fine). What it saves today: a step added to a lane (kept by its `legId`), and a new CONTACT lane with no `triggers` (a new uuid as its `legId`, its steps under its own trigger node); a new lane of any other record needs a way in. A property lane may add one hand-off to a contact lane the same save adds: an owner-pick step (kind PICK_MOST_LIKELY_OWNER) straight into a hand-off step (kind HAND_OFF), each a `wf_v2_read_only_step` whose config is `{kind, config, childBranches}`, the hand-off's config `{legId}` naming the new lane's legId as sent, the contact lane with no triggers of its own; any other `wf_v2_read_only_step` the draft does not already hold is refused. A save that turns off a lane's text screening or stop-on-reply exit, adds a Contact or Deal lane with less of either than the workflow's other lanes (or a new workflow's defaults), removes a lane that texts or stops on a reply (a lane resent under a new legId removes its stored one), or leaves no step, is refused with the sentence to ask the person; resend with `acknowledgeGraphWeakening: true` only on their yes. Returns the saved lanes and the new `updatedAt`. Read getWorkflow.draftValidation before publishing.

## Call

```ts
const result = await client.workflows.updateWorkflowLanes({ workflowAutomationId: '<id>', workflowLanes: <SuperJSON> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateWorkflowLanesMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateWorkflowLanesMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowAutomationId` | `ID!` | yes | — |
| `workflowLanes` | `SuperJSON!` | yes | — |
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
    "updateWorkflowAutomationLanes": {
      "workflowGroupId": true,
      "lanes": true,
      "readOnlyNodeIds": true,
      "updatedAt": true
    }
  }
}
```
