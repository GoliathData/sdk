<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# resumeWorkflowLane

mutation · domain `workflows` · requires the WRITE scope

Resume ONE paused lane: its held runs continue at their step and send (under a paused workflow, with resumeWorkflow); runs paused for another reason stay paused. Asks the workflow's channels first. `legId` as getWorkflowVersionLanes returns it; one the workflow has no lane for is BAD_USER_INPUT "That chapter is not part of this workflow." v2 only.

## Call

```ts
const result = await client.workflows.resumeWorkflowLane({ workflowGroupId: '<id>', legId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ResumeWorkflowLaneMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ResumeWorkflowLaneMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |
| `legId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "resumeWorkflowLane": {
      "id": true,
      "name": true,
      "status": true
    }
  }
}
```
