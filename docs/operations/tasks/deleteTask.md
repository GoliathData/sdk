<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteTask

mutation · domain `tasks` · requires the WRITE scope

PERMANENTLY delete ONE task by taskId + its linked contactId — the task is gone from the contact and from the user's queue with NO undo, so ALWAYS confirm with the user (name the task) before calling this. Prefer the reversible alternatives: completeTask if the work is actually DONE (that keeps the record and the completedAt history), updateTask if the details were merely wrong. Delete is for a task that should never have existed. STRICTLY ONE TASK PER CALL — THIS API exposes no bulk-delete operation and no filter-based sweep, so a request like 'delete all my completed tasks' cannot be honored here as one action. Say that precisely: it is one-at-a-time THROUGH THE API, and the PRODUCT is not the limit — the app's own task list has multi-select delete and multi-select complete, so offer that surface for a large sweep. If the user still wants it done here, list the tasks with listMyTasks, get explicit confirmation, and delete them one id at a time. Returns the owning contact with its remaining tasks so you can show what's left. The task must belong to the given contact.

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
