<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createWorkflow

mutation · domain `workflows` · requires the WRITE scope

Create a workflow automation: a new group plus its initial DRAFT version. workflowDomain is CONTACT | DEAL | PROPERTY | APPOINTMENT | EVENT. There is no workflowType (sending it is a 400 unknown_variable). Which channels a workflow messages on is not a property of the group: it is the union of the channels its communicationConfig configures with its own text_action / email_action steps, reported as `channels` on this response and on getWorkflow (listings carry `channelsAcrossVersions`). A create seeds NO communication config unless a templateId brings one; adding a text or email step with updateWorkflowGraph seeds that channel's editor defaults, and a sender must still be chosen before promoting. Optional templateId seeds the draft graph from a registered starter template. Edit the draft with updateWorkflowGraph, whose step vocabulary (listed there) is far more than texts and emails, then ship it with promoteWorkflowDraft. Optional sendWindow is the starting SENDING SCHEDULE (updateWorkflowSendWindow's shape); absent takes the template's when it has one, else the platform default. The graph never carries it: change it later with updateWorkflowSendWindow. THE SKIP-TRACE WORKFLOW (watches property signals in a buy-box and skip-traces each owner into a contact) is created with `workflowDomain: "PROPERTY"`, `systemCategory: "PROPERTY_SIGNAL_SKIP_TRACE"` and `templateId: "property_signal_skip_trace"` together, as the onboarding package does. Its draft is a trigger, a create-contact step and an end. It is promoted only with TWO triggers: a MUTATION trigger whose filter names at least one property signal type (`propertySignalTypes`, in ONE flat OR group: a run starts when a property gets any of them), and a MATCH trigger whose filter is an AND root carrying a top-level `spicyLeadScore` minimum (the buy-box; places and property types are optional conditions beside it). Read the draft with getWorkflowVersionGraph, replace its trigger with those two through updateWorkflowGraph, then promoteWorkflowDraft; getWorkflow.draftValidation names whichever is missing. Each run spends a skip-trace credit. Its daily run limit is the ORGANIZATION's, shared by every skip-trace workflow: setSkipTraceDailyCap sets it, getWorkflowThrottleUsage reads it.

## Call

```ts
const result = await client.workflows.createWorkflow({ name: '<text>', workflowDomain: <WorkflowDomain> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateWorkflowMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateWorkflowMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `name` | `String!` | yes | — |
| `description` | `String` | no | — |
| `workflowDomain` | `WorkflowDomain!` | yes | — |
| `templateId` | `String` | no | — |
| `systemCategory` | `String` | no | — |
| `sendWindow` | `JSON` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "createWorkflowGroup": {
      "id": true,
      "name": true,
      "status": true,
      "channels": true,
      "workflowDomain": true,
      "pendingDraft": {
        "id": true,
        "name": true,
        "status": true
      }
    }
  }
}
```
