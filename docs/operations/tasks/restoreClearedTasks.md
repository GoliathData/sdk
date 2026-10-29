<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# restoreClearedTasks

mutation · domain `tasks` · requires the WRITE scope

Bring back the tasks a clear removed (for 30 days after it), by the clear's bulkTaskId.

## Call

```ts
const result = await client.tasks.restoreClearedTasks({ bulkTaskId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RestoreClearedTasksMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RestoreClearedTasksMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `bulkTaskId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "tasksMutation": {
    "restoreClearedTasks": {
      "bulkTaskId": true,
      "taskCount": true
    }
  }
}
```
