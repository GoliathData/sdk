<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# bulkPauseWorkflowRuns

mutation · domain `workflows` · requires the WRITE scope

Pause many runs at once by explicit id (cap 500). Ids that are ineligible or not visible to you are counted in skippedCount, not errored.

## Call

```ts
const result = await client.workflows.bulkPauseWorkflowRuns({ workflowAutomationRunIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<BulkPauseWorkflowRunsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `BulkPauseWorkflowRunsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowAutomationRunIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "bulkPauseWorkflowRuns": {
      "transitionedCount": true,
      "skippedCount": true
    }
  }
}
```
