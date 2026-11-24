<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# pauseWorkflowLane

mutation · domain `workflows` · requires the WRITE scope

Pause ONE lane (a chapter of the canvas) of a Workflows v2 workflow, as its Pause does: records entering it are held, and pauseInFlightRuns=true also pauses the runs in it (false lets them finish); the rest runs on. `legId` as getWorkflowVersionLanes returns it; one the workflow has no lane for is BAD_USER_INPUT "That chapter is not part of this workflow." v2 only.

## Call

```ts
const result = await client.workflows.pauseWorkflowLane({ workflowGroupId: '<id>', legId: '<id>', pauseInFlightRuns: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<PauseWorkflowLaneMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PauseWorkflowLaneMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |
| `legId` | `ID!` | yes | — |
| `pauseInFlightRuns` | `Boolean!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "pauseWorkflowLane": {
      "id": true,
      "name": true,
      "status": true
    }
  }
}
```
