<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getWorkflowVersionGraph

query · domain `workflows` · requires the READ scope

Fetch one workflow VERSION by workflowAutomationId (from getWorkflow.versions/currentVersion/pendingDraft) with its full node/edge graph: the superjson-serialized WorkflowGraph updateWorkflowGraph writes back. Its `triggers` array shows what starts runs; updateWorkflowGraph documents the trigger shapes, how to add or remove them, and the FULL step vocabulary (far more than text steps). Read `graph.config` before answering about BEHAVIOUR rather than steps: exit conditions, sender selection and the trigger operator live there, not on a node. The SENDING schedule does not: it is getWorkflow.sendWindow. `inWords` states the triggers and the stop rules in words, and `inWords.names` names every tag, list, teammate or stage the graph holds by id (a tag and a list share names: read `kind`). Describe the workflow from these, never from its name or description; keep every stop rule unless the person asks to drop that one. TRIGGERS ARE NOT THE ONLY WAY IN. Steps in OTHER workflows enroll records into this one: a PROPERTY `create_contact_action` (the contact it creates), a `trigger_contact_workflow_action` (start another workflow), and an EVENT `find_create_contact_action` / `event_find_property_action`. A workflow whose only trigger is {type: "manual"} is normal when it is fed that way: never call it idle or unreachable from its triggers alone. getDeletionImpact(targetKind: WORKFLOW_GROUP, targetId: <this group id>) says whether anything references it: its WORKFLOW_AUTOMATION group counts REFERENCES (each step, trigger or filter in each live version naming this one, so one workflow can count more than once), not names. To see WHICH workflows feed it, scan other workflows' graphs (getWorkflowVersionGraph) for a step naming this group id. TO CHANGE WHAT A WORKFLOW DOES (add a condition, change a trigger, narrow who it acts on), edit its graph: createOrReturnWorkflowDraft → updateWorkflowGraph → promoteWorkflowDraft, then resumeWorkflow if it was paused. Pausing only stops it. E.g. a PROPERTY workflow can require a motivation signal before it creates or texts anyone: a `conditional` step on the `hasSignal` or `propertySignalTypes` property filter fields (listFilterFieldNames lists them) ahead of the `create_contact_action` step. Never tell a user restricting outreach this way needs human review: it is a graph edit. WEBHOOK SECRETS ARE REDACTED. A `send_webhook_action` step's `config.auth.secret` reads as the literal `__GOLIATH_WEBHOOK_SECRET_REDACTED__` — never the credential, never a value to quote or reason about. Send it BACK UNCHANGED in updateWorkflowGraph to keep the stored secret, and a different string only when the user is deliberately rotating it. Never invent, guess or complete a replacement: that overwrites a working credential. The sentinel on a step with no stored secret behind it (a step you just added, or a graph read so long ago its node ids rotated) is REFUSED: re-read the graph and carry it from the fresh copy. 

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
      "updatedAt": true,
      "inWords": {
        "triggers": true,
        "triggerOperator": true,
        "stopsWhen": true,
        "names": {
          "id": true,
          "name": true,
          "kind": true
        }
      },
      "graph": true
    }
  }
}
```
