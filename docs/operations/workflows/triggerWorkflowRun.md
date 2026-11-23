<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# triggerWorkflowRun

mutation · domain `workflows` · requires the WRITE scope

Manually start one run of a workflow's ACTIVE version against a record: a contactId, propertyId, pipelineItemId (DEAL) or taskId (APPOINTMENT). recordType says which (CONTACT, PROPERTY, DEAL, APPOINTMENT); a workflow of several lanes starts the record on the lane about that type. Omitted, recordId must match the workflow's own domain. A Workflows v1 workflow is about one type and ignores recordType.

## Call

```ts
const result = await client.workflows.triggerWorkflowRun({ workflowGroupId: '<id>', recordId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<TriggerWorkflowRunMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `TriggerWorkflowRunMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |
| `recordId` | `ID!` | yes | — |
| `recordType` | `WorkflowDomain` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "triggerWorkflowRun": {
      "id": true,
      "status": true,
      "dryRun": true,
      "createdAt": true,
      "scheduledExecution": true
    }
  }
}
```
