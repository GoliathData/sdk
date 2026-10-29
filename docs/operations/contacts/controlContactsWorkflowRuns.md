<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# controlContactsWorkflowRuns

mutation · domain `contacts` · requires the WRITE scope

PAUSE or RESUME the workflow runs of contacts (optional workflowGroupIds narrows it). RESUME restarts only runs someone paused by hand on a workflow version still active; other runs are skipped. A bulk task (`bulkTaskId`, getBulkTask). The person approves it on a card.

## Call

```ts
const result = await client.contacts.controlContactsWorkflowRuns({ contactIds: ['<text>'], operation: <WorkflowRunBulkOperation>, workflowGroupIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ControlContactsWorkflowRunsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ControlContactsWorkflowRunsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[String!]!` | yes | — |
| `operation` | `WorkflowRunBulkOperation!` | yes | — |
| `workflowGroupIds` | `[ID!]!` | yes | [] |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "createBulkControlWorkflowRunsTask": {
      "bulkTaskId": true
    }
  }
}
```
