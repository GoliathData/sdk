<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createTaskOnContact

mutation · domain `tasks` · requires the WRITE scope

Create a to-do task on a contact: one line item (title, optional description, due day, assignees) in someone's queue, checked off with completeTask; NOT a calendar event (createAppointment) and NOT a background job (bulkTasks). Requires contactId, title, dueDate, timezone. DUE DATES ARE A LOCAL DAY, NOT AN INSTANT: timezone (PST/MST/CST/EST/…) is the zone the day is read in, and it decides the TODAY/OVERDUE bucket in listMyTasks; send the user's zone, and for a day-level ask ("follow up Friday") pick an end-of-business time there, not a bare midnight. ALWAYS pass participants (getMyProfile for the key owner, listTeammates for a colleague; same-org): with none the task is UNASSIGNED and in nobody's listMyTasks, which is how a checklist silently goes missing. ONE TASK PER CALL: an ad-hoc multi-step checklist is one call per step, in order, with staggered due dates (a saved TASK_SET is one applyTaskSet call). bulkCreateTasksOnContacts puts ONE task on many contacts, so a checklist over many contacts is STILL one action per step even there; never promise a whole ad-hoc multi-step checklist in one click, here or in the app. The response echoes the contact's FULL task list: confirm the checklist from the last call's list. From a chat, a dealIds deal holding an open task refuses the create and names it: ask whether to move that one or add another, then resend with alongsideOpenTasks: true. Confirm the plan with the user before creating tasks for them.

## Call

```ts
const result = await client.tasks.createTaskOnContact({ contactId: '<text>', title: '<text>', dueDate: <DateTime>, timezone: <Timezone> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateTaskOnContactMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateTaskOnContactMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `String!` | yes | — |
| `title` | `String!` | yes | — |
| `dueDate` | `DateTime!` | yes | — |
| `timezone` | `Timezone!` | yes | — |
| `description` | `String` | no | — |
| `taskType` | `String` | no | — |
| `participants` | `[String!]` | no | — |
| `dealIds` | `[ID!]` | no | — |
| `alongsideOpenTasks` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "tasksMutation": {
    "createTaskOnContact": {
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
