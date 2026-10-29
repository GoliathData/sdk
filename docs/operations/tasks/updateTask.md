<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateTask

mutation · domain `tasks` · requires the WRITE scope

Fix an existing task by taskId + its linked contactId (from listMyTasks or listContactTasks): title, description, taskType, dueDate (ISO, with timezone), timezone, or participants (teammate userIds from listTeammates). PATCH: only the fields you pass change; participants REPLACES the whole assignee list. UNDO: Task keeps no history, but every edit on a contact-linked task writes an UPDATED_TASK entry with oldValues to the contact's timeline (listContactActivities; one per edit, the oldest holds the original) — read it and write the old value back; never call a value unrecoverable without looking. WHOSE TASK: empty participants = UNASSIGNED, nobody's; a NON-EMPTY list that does not include the key owner is a TEAMMATE's task — an admin key may write it, but say whose first; a queue read is never proof a task is the reader's. The tool for 'push that follow-up to Friday': reschedule in place; many tasks to one date is rescheduleTasks. contactId IDENTIFIES the task's existing contact, it does NOT move it: any other is rejected, and nothing here re-links a task. Delete-then-recreate is NOT a move — it loses completedAt, the outcome, the created date and every notification and automation link — so say the task can't be moved, and rebuild it only if they ask after hearing that. To tick a task off use completeTask. A task with no contact: updateTaskOnDeal.

## Call

```ts
const result = await client.tasks.updateTask({ taskId: '<text>', contactId: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateTaskMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateTaskMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `taskId` | `String!` | yes | — |
| `contactId` | `String!` | yes | — |
| `title` | `String` | no | — |
| `description` | `String` | no | — |
| `taskType` | `String` | no | — |
| `dueDate` | `DateTime` | no | — |
| `timezone` | `Timezone` | no | — |
| `participants` | `[String!]` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "tasksMutation": {
    "updateTaskOnContact": {
      "id": true,
      "name": true,
      "tasks": {
        "id": true,
        "title": true,
        "description": true,
        "taskType": true,
        "dueDate": true,
        "timezone": true,
        "completedAt": true,
        "participants": {
          "id": true,
          "firstName": true,
          "lastName": true
        }
      }
    }
  }
}
```
