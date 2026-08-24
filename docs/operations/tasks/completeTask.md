<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# completeTask

mutation · domain `tasks` · requires the WRITE scope

Mark a task complete by taskId + its linked contactId (both come back from listMyTasks or listContactTasks). USE THIS ONE whenever the task has a contact — it also writes the completion onto that contact's timeline, and the response echoes the contact's task list with completedAt set, so you can confirm the checkmark and show what's still open. Applied synchronously. Pass isCompleted: false to reopen a task completed by mistake. The task must belong to the given contact. If listMyTasks returned the task with contact: null there is NO contactId to pass and this op cannot complete it — use completeTaskById instead. Confirm with the user before completing anything on their behalf.

## Call

```ts
const result = await client.tasks.completeTask({ taskId: '<text>', contactId: '<text>', isCompleted: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CompleteTaskMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CompleteTaskMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `taskId` | `String!` | yes | — |
| `contactId` | `String!` | yes | — |
| `isCompleted` | `Boolean!` | yes | true |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "tasksMutation": {
    "updateTaskCompleted": {
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
