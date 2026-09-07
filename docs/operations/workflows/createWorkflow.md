<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createWorkflow

mutation · domain `workflows` · requires the WRITE scope

Create a workflow automation: a new group plus its initial DRAFT version. workflowDomain is CONTACT | DEAL | PROPERTY | APPOINTMENT | EVENT; creating APPOINTMENT workflows is restricted to Goliath admins. workflowType is GONE from this API: the field it reported is removed, and this operation no longer declares the variable, so sending it is a 400 unknown_variable rather than a no-op. (B9c removed the underlying GraphQL input and its enum as well, so no surface accepts it any more.) Which channels a workflow messages on is not a property of the group and never was: it comes from the graph, as the union of the channels its communicationConfig configures with its own text_action / email_action steps, and the field that reports it is `channels` (TEXT, EMAIL, both, or empty for pure CRM automation that messages nobody). Read `channels`, on this response and on getWorkflow. It is deliberately absent from the paginated listWorkflows / listWorkflowPerformance: it is derived from the workflow's graph, one read per row, so a page would pay for it whether or not you wanted it. A create seeds NO communication config unless a templateId brings one, which is exactly what "no channel chosen yet" means; set the channel with updateWorkflowGraph's communicationConfig. Optional templateId seeds the draft graph from a registered starter template. Edit the draft graph with updateWorkflowGraph — see it for the full authorable node vocabulary (tags, team + round-robin agent assignment, teammate notifications, tasks, appointments, deals, custom fields, AI employees, webhooks, Slack, chaining other workflows — not just texts/emails) — then ship it with promoteWorkflowDraft.

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
