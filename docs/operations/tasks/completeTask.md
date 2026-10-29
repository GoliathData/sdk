<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# completeTask

mutation · domain `tasks` · requires the WRITE scope

Mark a task complete by taskId + its contactId (listMyTasks/listContactTasks). USE THIS whenever the task has a contact: it also writes the completion to the contact's timeline, and the response echoes the contact's tasks with completedAt, to confirm and show what's open. Synchronous. isCompleted: false reopens. The task must be on that contact. A task listed with contact: null has no contactId: use completeTaskById. Confirm with the user before completing anything for them.

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
