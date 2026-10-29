<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# pauseScheduledTask

mutation · domain `scheduledTasks` · requires the WRITE scope

Pause a scheduled task: it stops running until resumed. Only the task's owner or an org admin may change it (`canEdit`).

## Call

```ts
const result = await client.scheduledTasks.pauseScheduledTask({ taskId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<PauseScheduledTaskMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PauseScheduledTaskMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `taskId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "scheduledTaskMutation": {
    "pauseScheduledTask": {
      "id": true,
      "status": true,
      "nextRunAt": true
    }
  }
}
```
