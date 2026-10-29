<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# completeTaskById

mutation · domain `tasks` · requires the WRITE scope

Complete a task by taskId ALONE, for tasks with NO contact (listMyTasks contact: null; typically deal tasks). Returns the task. isCompleted: false reopens. It REFUSES a task with a contact (it would skip the timeline entry): use completeTask. A contact-less APPOINTMENT completes too (type says so); no task count includes it. It only completes tasks YOU are on: a non-admin key gets a permission error for someone else's. Confirm with the user first.

## Call

```ts
const result = await client.tasks.completeTaskById({ taskId: '<id>', isCompleted: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CompleteTaskByIdMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CompleteTaskByIdMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `taskId` | `ID!` | yes | — |
| `isCompleted` | `Boolean!` | yes | true |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "tasksMutation": {
    "updateTasksCompletedByIds": {
      "id": true,
      "title": true,
      "type": true,
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
```
