<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateScheduledTask

mutation · domain `scheduledTasks` · requires the WRITE scope

Change a scheduled task; only what you send changes. `timing` is { cronExpression or fireAt, timezone }, exactly one of the two. `clearExpiresAt: true` removes its end (do not send it with `expiresAt`). Only the task's owner or an org admin may change it (`canEdit`).

## Call

```ts
const result = await client.scheduledTasks.updateScheduledTask({ taskId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateScheduledTaskMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateScheduledTaskMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `taskId` | `ID!` | yes | — |
| `title` | `String` | no | — |
| `instruction` | `String` | no | — |
| `timing` | `ScheduledTaskTimingInput` | no | — |
| `tags` | `[String!]` | no | — |
| `expiresAt` | `DateTime` | no | — |
| `clearExpiresAt` | `Boolean` | no | — |
| `notifyOnlyOnChange` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "scheduledTaskMutation": {
    "updateScheduledTask": {
      "id": true,
      "title": true,
      "instruction": true,
      "status": true,
      "schedule": true,
      "nextRunAt": true,
      "tags": true,
      "expiresAt": true,
      "notifyOnlyOnChange": true
    }
  }
}
```
