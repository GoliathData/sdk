<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listScheduledTasks

query · domain `scheduledTasks` · requires the READ scope

Every scheduled task in your organization (yours first, then teammates', newest first), each a chat that runs Ask Goliath on a schedule as its owner: title, `status` (ACTIVE, PAUSED, PAUSED_ERRORS after repeated failures, EXHAUSTED when finished), `cadence` (ONE_OFF or RECURRING), `schedule` in words, `nextRunAt`, `lastRunAt`, `runCount`, owner, tags, and `canEdit`. Narrow by `ownerUserId`, `tag`, `statuses` or `cadence`. getScheduledTask reads one with its instruction.

## Call

```ts
const result = await client.scheduledTasks.listScheduledTasks()
// → Promise<ListScheduledTasksQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListScheduledTasksQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `ownerUserId` | `ID` | no | — |
| `tag` | `String` | no | — |
| `statuses` | `[ScheduledTaskStatus!]` | no | — |
| `cadence` | `ScheduledTaskCadence` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "scheduledTaskQuery": {
    "scheduledTasks": {
      "id": true,
      "title": true,
      "status": true,
      "cadence": true,
      "schedule": true,
      "nextRunAt": true,
      "lastRunAt": true,
      "runCount": true,
      "ownerUserId": true,
      "ownerName": true,
      "tags": true,
      "mine": true,
      "canEdit": true,
      "running": true
    }
  }
}
```
