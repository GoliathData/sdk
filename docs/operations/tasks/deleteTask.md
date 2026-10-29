<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteTask

mutation · domain `tasks` · requires the WRITE scope

PERMANENTLY delete ONE task by taskId + its contactId: gone from the contact and the queue with NO undo, so ALWAYS confirm with the user, naming the task. Prefer completeTask if the work is DONE (keeps the record and completedAt) or updateTask if details were wrong; delete is for a task that should never have existed. Many at once is deleteTasks: for a sweep ('delete my completed tasks') list them with listMyTasks, get explicit confirmation of the list, then delete. Returns the contact's remaining tasks. The task must belong to the given contact; a task with no contact is deleteTaskOnDeal.

## Call

```ts
const result = await client.tasks.deleteTask({ taskId: '<text>', contactId: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteTaskMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteTaskMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `taskId` | `String!` | yes | — |
| `contactId` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "tasksMutation": {
    "deleteTaskOnContact": {
      "id": true,
      "name": true,
      "tasks": {
        "id": true,
        "title": true,
        "dueDate": true,
        "completedAt": true
      }
    }
  }
}
```
