<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# clearStaleWorkflowTasks

mutation · domain `tasks` · requires the WRITE scope

Clear the key owner's stale workflow tasks: open to-dos a workflow made, on their list alone, due more than 7 days before today in timezone (an IANA zone). At most 2,000; they are removed (never completed) in 10 seconds. No read counts them beforehand: ask for the clear as described, then report taskCount (and hasMore); restoreClearedTasks undoes it. bulkTaskId null: nothing qualified.

## Call

```ts
const result = await client.tasks.clearStaleWorkflowTasks({ timezone: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ClearStaleWorkflowTasksMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ClearStaleWorkflowTasksMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `timezone` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "tasksMutation": {
    "clearStaleWorkflowTasks": {
      "bulkTaskId": true,
      "taskCount": true,
      "hasMore": true,
      "startsAt": true
    }
  }
}
```
