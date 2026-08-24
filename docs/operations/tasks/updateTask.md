<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateTask

mutation · domain `tasks` · requires the WRITE scope

Fix an existing task by taskId + its linked contactId (both from listMyTasks or listContactTasks) — title, description, taskType, dueDate, timezone, or participants (teammate userIds from listTeammates). PATCH semantics: only the fields you pass change; passing participants REPLACES the whole assignee list rather than adding to it. RE-WRITABLE, AND UNDOABLE ONLY IF YOU LOOK: Task keeps no history, so an overwritten value is gone from the TASK but not from the product — every update on a contact-linked task writes an UPDATED_TASK entry to that contact's timeline with oldValues, which listContactActivities returns. Undo a wrong edit by reading it and writing the old value back; never call a previous value unrecoverable without having looked. Only tasks WITH a contact get one, one per edit, so the oldest holds the value before the first change. WHOSE TASK IS IT: the row carries participants. EMPTY means UNASSIGNED — nobody's, not somebody else's — and writing to it without naming an owner is unremarkable. A NON-EMPTY list that does not include the key owner is a TEAMMATE's task; an admin key may write to it, but say whose task you are changing first, and never treat a queue read as proof that everything in it is the reader's. The right tool for 'push that follow-up to Friday' — reschedule in place, do not delete and recreate. Pass dueDate as an ISO timestamp with the timezone alongside so it lands on the day the user meant. contactId IDENTIFIES the task's existing contact, it does NOT move it: pass the contact the task is already on; any other is rejected. NO operation here re-links a task to a different contact, and delete-then-recreate is NOT equivalent — a fresh createTaskOnContact loses the completedAt history, the outcome, the created date, and every notification and workflow-automation link, so it silently destroys the record the user asked you to move. Say plainly that the task can't be moved, and rebuild it elsewhere only if they ask for exactly that after hearing what is lost. To tick a task off use completeTask. To reassign, pass participants.

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
