<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getWorkflow

query · domain `workflows` · requires the READ scope

Fetch one workflow automation by group id — status, versions (a workflow is a stable group holding versioned definitions), the live version, the pending draft, and draft validation state. BOTH channel answers are here, and they are different questions. `channels` reads exactly ONE version — the most recently PUBLISHED one whatever status it now holds (active, paused or suspended), or the pending draft when nothing has ever published — and is null when that version's graph could not be read, [] when the group has no version at all. `channelsAcrossVersions` reads EVERY version that has not been deleted, superseded ones and unpublished drafts included; it is the field the paginated listings carry and the app's Channel filter matches on, and it is never null. They differ whenever any non-deleted version messages on a channel the published one does not. Both report CONFIGURED channels, not sending: a paused or suspended head still answers the channel it is configured for while sending nothing, so read `status` before describing a workflow as actively texting or emailing. TRIGGERS ARE NOT THE ONLY WAY IN. Steps in OTHER workflows enroll records into this one: a PROPERTY `create_contact_action` (enrolls the contact it creates), a `trigger_contact_workflow_action` (start another workflow), and an EVENT `find_create_contact_action` / `event_find_property_action`. A workflow whose only trigger is {type: "manual"} is normal when it is fed that way — never call it idle or unreachable from its triggers alone. getDeletionImpact(targetKind: WORKFLOW_GROUP, targetId: <this group id>) says whether anything references it: its WORKFLOW_AUTOMATION group counts REFERENCES — each step, trigger or filter in each live version that names this one, so one workflow can count more than once. That is a count, not names — to see WHICH workflows feed it, scan other workflows' graphs (getWorkflowVersionGraph) for a step naming this group id. TO CHANGE WHAT A WORKFLOW DOES (add a condition, change a trigger, narrow who it acts on), edit its graph: createOrReturnWorkflowDraft → updateWorkflowGraph → promoteWorkflowDraft, then resumeWorkflow if it was paused. Pausing only stops it. Example: a PROPERTY workflow can require a motivation signal before it creates or texts anyone — put a `conditional` step on the `hasSignal` or `propertySignalTypes` property filter fields (listFilterFieldNames lists them) ahead of the `create_contact_action` step. Never tell a user that restricting outreach this way needs human review: it is a graph edit.

## Call

```ts
const result = await client.workflows.getWorkflow({ workflowGroupId: '<id>' })
// → Promise<GetWorkflowQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetWorkflowQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "workflowGroup": {
      "id": true,
      "name": true,
      "description": true,
      "status": true,
      "channels": true,
      "channelsAcrossVersions": true,
      "workflowDomain": true,
      "systemCategory": true,
      "folderId": true,
      "createdAt": true,
      "updatedAt": true,
      "archivedAt": true,
      "currentVersion": {
        "id": true,
        "name": true,
        "status": true,
        "stepKinds": true
      },
      "pendingDraft": {
        "id": true,
        "name": true,
        "status": true,
        "stepKinds": true
      },
      "versions": {
        "id": true,
        "name": true,
        "status": true,
        "createdAt": true,
        "updatedAt": true
      },
      "draftValidation": {
        "isValid": true,
        "errors": true
      }
    }
  }
}
```
