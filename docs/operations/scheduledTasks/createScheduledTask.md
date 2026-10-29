<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createScheduledTask

mutation · domain `scheduledTasks` · requires the WRITE scope

Schedule Ask Goliath to run `instruction` as the key owner: give exactly one of `cronExpression` (recurring, 5 fields) or `fireAt` (once), read in `timezone` (IANA). Optional `expiresAt` (it stops after). Each run asks the owner before any action (no abilities). Refused while scheduled tasks are off for the workspace.

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
