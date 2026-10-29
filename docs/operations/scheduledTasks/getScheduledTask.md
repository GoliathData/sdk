<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getScheduledTask

query · domain `scheduledTasks` · requires the READ scope

One scheduled task by id (listScheduledTasks): its `instruction` (what Ask Goliath is told on every run), `cronExpression` and `timezone` (a one-off has `oneOffAt`), `abilities` (actions its runs may take without asking), `expiresAt`, `notifyOnlyOnChange`, its chat (`sessionId`) and whether it is `running` now.

## Call

```ts
const result = await client.scheduledTasks.getScheduledTask({ taskId: '<id>' })
// → Promise<GetScheduledTaskQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetScheduledTaskQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `taskId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "scheduledTaskQuery": {
    "scheduledTask": {
      "id": true,
      "title": true,
      "instruction": true,
      "status": true,
      "cadence": true,
      "cronExpression": true,
      "timezone": true,
      "oneOffAt": true,
      "schedule": true,
      "nextRunAt": true,
      "lastRunAt": true,
      "runCount": true,
      "ownerUserId": true,
      "ownerName": true,
      "sessionId": true,
      "abilities": true,
      "tags": true,
      "expiresAt": true,
      "notifyOnlyOnChange": true,
      "createdAt": true,
      "mine": true,
      "canEdit": true,
      "running": true
    }
  }
}
```
