<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getWorkflow

query · domain `workflows` · requires the READ scope

Fetch one workflow automation by group id: status, versions, the live version, the pending draft and draft validation. `channels` reads ONE version, the most recently PUBLISHED whatever its status now (active, paused or suspended), else the pending draft; null when that graph could not be read, [] when the group has no version. `channelsAcrossVersions` reads every version not deleted, superseded ones and drafts included (never null), so the two differ whenever another version messages on a channel the published one does not. Both are CONFIGURED channels, not sending: a paused or suspended head answers its channels while sending nothing, so read `status` before calling a workflow actively texting or emailing. `draftValidation.carrierRisk` is the draft's text copy scored for carrier filtering, riskiest first (`isFallback`: the step's backup text). It never blocks the promote: reword a medium or high one with rewriteWorkflowDraftTextStep first. `sendWindow` is the workflow's live SENDING SCHEDULE (a graph `triggerWindow`'s shape plus `timezoneMode`, see updateWorkflowGraph), or null for the platform default (Mon–Fri 09:00–19:00 org time). It belongs to the workflow, not a version: every run reads it on its next send, whichever version it started on. Only updateWorkflowSendWindow changes it; no graph write can. `stepKinds` names step TYPES, not waits or copy: never say a pending draft matches or changes the published one before reading BOTH with getWorkflowVersionGraph (paused: the published one is in `versions`, not `currentVersion`). TRIGGERS ARE NOT THE ONLY WAY IN. Steps in OTHER workflows enroll records into this one: a PROPERTY `create_contact_action` (the contact it creates), a `trigger_contact_workflow_action` (start another workflow), and an EVENT `find_create_contact_action` / `event_find_property_action`. A workflow whose only trigger is {type: "manual"} is normal when it is fed that way: never call it idle or unreachable from its triggers alone. getDeletionImpact(targetKind: WORKFLOW_GROUP, targetId: <this group id>) says whether anything references it: its WORKFLOW_AUTOMATION group counts REFERENCES (each step, trigger or filter in each live version naming this one, so one workflow can count more than once), not names. To see WHICH workflows feed it, scan other workflows' graphs (getWorkflowVersionGraph) for a step naming this group id. TO CHANGE WHAT A WORKFLOW DOES (add a condition, change a trigger, narrow who it acts on), edit its graph: createOrReturnWorkflowDraft → updateWorkflowGraph → promoteWorkflowDraft, then resumeWorkflow if it was paused. Pausing only stops it. E.g. a PROPERTY workflow can require a motivation signal before it creates or texts anyone: a `conditional` step on the `hasSignal` or `propertySignalTypes` property filter fields (listFilterFieldNames lists them) ahead of the `create_contact_action` step. Never tell a user restricting outreach this way needs human review: it is a graph edit.

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
      "sendWindow": true,
      "folderId": true,
      "createdAt": true,
      "updatedAt": true,
      "archivedAt": true,
      "currentVersion": {
        "id": true,
        "name": true,
        "status": true,
        "stepKinds": true,
        "updatedAt": true
      },
      "pendingDraft": {
        "id": true,
        "name": true,
        "status": true,
        "stepKinds": true,
        "updatedAt": true
      },
      "versions": {
        "id": true,
        "name": true,
        "status": true,
        "publishedAt": true,
        "createdAt": true,
        "updatedAt": true
      },
      "draftValidation": {
        "isValid": true,
        "errors": true,
        "carrierRisk": {
          "nodeId": true,
          "body": true,
          "band": true,
          "templateId": true,
          "isFallback": true
        }
      },
      "runsPausedWithWorkflow": true,
      "runsParkedByPublish": true
    }
  }
}
```
