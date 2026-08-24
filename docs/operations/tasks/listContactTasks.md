<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listContactTasks

query · domain `tasks` · requires the READ scope

List every to-do task on one contact (by contactId from findContacts/getContact/listMyTasks) — title, description, dueDate, completedAt, and assigned participants. Use it to review a contact's outstanding work before a call, or to find the taskId + contactId pair completeTask needs. Appointments are separate — see listAppointments.

## Call

```ts
const result = await client.tasks.listContactTasks({ contactId: '<id>' })
// → Promise<ListContactTasksQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListContactTasksQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "contact": {
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
