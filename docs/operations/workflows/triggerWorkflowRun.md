<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# triggerWorkflowRun

mutation · domain `workflows` · requires the WRITE scope

Manually start one run of a workflow's ACTIVE version against a record. recordId must match the workflow's domain: a contactId for CONTACT workflows, propertyId for PROPERTY, dealId for DEAL, taskId for APPOINTMENT.

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
