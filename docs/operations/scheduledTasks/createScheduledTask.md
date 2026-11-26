<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createScheduledTask

mutation · domain `scheduledTasks` · requires the WRITE scope

Schedule Ask Goliath to run `instruction` as the key owner: give exactly one of `cronExpression` (recurring, 5 fields), `fireAt` (once) or `runNow: true` (once, now: background work that would outlast a chat turn; its run happens in the task’s own chat, `sessionId`, and pushes its owner the result), read in `timezone` (IANA). Optional `expiresAt` (it stops after). It is granted no abilities: each run makes no change on its own (it reads and reports, or asks the owner first). Refused while scheduled tasks are off for the organization.

## Call

```ts
const result = await client.scheduledTasks.createScheduledTask({ title: '<text>', instruction: '<text>', timezone: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateScheduledTaskMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateScheduledTaskMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `title` | `String!` | yes | — |
| `instruction` | `String!` | yes | — |
| `timezone` | `String!` | yes | — |
| `cronExpression` | `String` | no | — |
| `fireAt` | `DateTime` | no | — |
| `expiresAt` | `DateTime` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "scheduledTaskMutation": {
    "createScheduledTask": {
      "id": true,
      "title": true,
      "instruction": true,
      "status": true,
      "schedule": true,
      "nextRunAt": true,
      "sessionId": true
    }
  }
}
```
