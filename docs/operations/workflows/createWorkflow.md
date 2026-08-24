<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createWorkflow

mutation · domain `workflows` · requires the WRITE scope

Create a workflow automation: a new group plus its initial DRAFT version. workflowDomain is CONTACT | DEAL | PROPERTY | APPOINTMENT | EVENT, and workflowType must match the domain: CONTACT accepts EMAIL | TEXT | SOP (TEXT for workflows with SMS text_action steps, EMAIL for email_action steps, SOP for pure CRM automation with neither); DEAL, PROPERTY and EVENT are SOP-only; APPOINTMENT accepts TEXT | SOP but creating APPOINTMENT workflows is restricted to Goliath admins. Optional templateId seeds the draft graph from a registered starter template. Edit the draft graph with updateWorkflowGraph — see it for the full authorable node vocabulary (tags, team + round-robin agent assignment, teammate notifications, tasks, appointments, deals, custom fields, AI employees, webhooks, Slack, chaining other workflows — not just texts/emails) — then ship it with promoteWorkflowDraft.

## Call

```ts
const result = await client.workflows.createWorkflow({ name: '<text>', workflowType: <WorkflowType>, workflowDomain: <WorkflowDomain> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateWorkflowMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateWorkflowMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `name` | `String!` | yes | — |
| `description` | `String` | no | — |
| `workflowType` | `WorkflowType!` | yes | — |
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
      "workflowType": true,
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
