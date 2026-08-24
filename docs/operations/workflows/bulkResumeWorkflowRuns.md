<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# bulkResumeWorkflowRuns

mutation · domain `workflows` · requires the WRITE scope

Resume many paused runs at once by explicit id (cap 500). Ineligible or not-visible ids are counted in skippedCount, not errored.

## Call

```ts
const result = await client.workflows.bulkResumeWorkflowRuns({ workflowAutomationRunIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<BulkResumeWorkflowRunsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `BulkResumeWorkflowRunsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "bulkResumeWorkflowRuns": {
      "transitionedCount": true,
      "skippedCount": true
    }
  }
}
```
