<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# completeTaskById

mutation · domain `tasks` · requires the WRITE scope

Mark a task complete by taskId ALONE — for the tasks that have NO linked contact, which listMyTasks returns with contact: null (typically tasks created on a deal, or unanchored to-dos). completeTask cannot touch those because it requires a contactId that does not exist; this op is how they get checked off. Applied synchronously; returns the updated task itself (title, dueDate, completedAt, participants) rather than a contact, since there is no contact to return. Pass isCompleted: false to reopen a task completed by mistake. It REFUSES a task that has a contact, rather than quietly completing it without that timeline entry — so if you get that error, the task does have a contact and completeTask is the correct op. It also only completes tasks YOU are on: a non-admin key gets a permission error for a task assigned to someone else, matching what listMyTasks lets you see. Confirm with the user before completing anything on their behalf.

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
