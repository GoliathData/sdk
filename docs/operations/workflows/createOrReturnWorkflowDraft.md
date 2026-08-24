<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createOrReturnWorkflowDraft

mutation · domain `workflows` · requires the WRITE scope

Idempotent "edit": return the existing DRAFT version under this workflow, or clone the live (or most recently paused) version into a fresh DRAFT. Use the returned id with updateWorkflowGraph.

## Call

```ts
const result = await client.workflows.createOrReturnWorkflowDraft({ workflowGroupId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateOrReturnWorkflowDraftMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateOrReturnWorkflowDraftMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "createOrReturnWorkflowGroupDraft": {
      "id": true,
      "workflowGroupId": true,
      "name": true,
      "status": true,
      "stepKinds": true,
      "graph": true
    }
  }
}
```
