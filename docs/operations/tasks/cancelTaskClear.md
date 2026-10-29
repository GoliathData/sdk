<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# cancelTaskClear

mutation · domain `tasks` · requires the WRITE scope

Undo a clear inside its 10 seconds (CANCELLED, nothing changed); ALREADY_STARTED means use restoreClearedTasks.

## Call

```ts
const result = await client.tasks.cancelTaskClear({ bulkTaskId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CancelTaskClearMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CancelTaskClearMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "cancelTaskClear": true
  }
}
```
