<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# resumeScheduledTask

mutation · domain `scheduledTasks` · requires the WRITE scope

Resume a paused task from its next occurrence; missed runs are not made up. Only the task's owner or an org admin may change it (`canEdit`).

## Call

```ts
const result = await client.scheduledTasks.resumeScheduledTask({ taskId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ResumeScheduledTaskMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ResumeScheduledTaskMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "resumeScheduledTask": {
      "id": true,
      "status": true,
      "nextRunAt": true
    }
  }
}
```
