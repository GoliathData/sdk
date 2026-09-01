<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# duplicateWorkflow

mutation · domain `workflows` · requires the WRITE scope

Duplicate a workflow into a fresh workflow group with the given name (copied as a paused/draft copy — it never starts running by itself). The copy inherits the source's `systemCategory`, so a duplicated "PROPERTY_SIGNAL_SKIP_TRACE" workflow is another one of those. The one exception is "APPOINTMENT_REMINDER", which is REFUSED: a reminder step's trigger discriminates on a lead group id that enrolled appointments point at, so a copy would fire for the source reminder's appointments. Create a new reminder instead.

## Call

```ts
const result = await client.workflows.duplicateWorkflow({ workflowGroupId: '<id>', name: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DuplicateWorkflowMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DuplicateWorkflowMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |
| `name` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "duplicateWorkflowGroup": {
      "id": true,
      "name": true,
      "status": true,
      "workflowType": true,
      "workflowDomain": true
    }
  }
}
```
