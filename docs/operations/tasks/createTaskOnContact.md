<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createTaskOnContact

mutation · domain `tasks` · requires the WRITE scope

Create a to-do task on a contact — the follow-up/SOP workhorse. A task here is one actionable line item (title, optional description, a due date, an assignee) that lands in someone's task queue and gets checked off with completeTask; it is NOT a calendar event with a start time (that's createAppointment) and NOT a background job (that's the bulkTasks domain). Requires contactId (from findContacts/getContact), title, dueDate, and timezone. DUE DATES ARE A LOCAL DAY, NOT AN INSTANT: timezone (PST/MST/CST/EST/…) is the zone the due date's day is read in, and it's what makes a task land in the right TODAY/OVERDUE bucket in listMyTasks — send the user's own zone, and for a day-level ask ("follow up Friday") pick an end-of-business time in that zone rather than a bare midnight. ALWAYS pass participants (user ids, from getMyProfile for the key owner or listTeammates for a colleague, same-org only): a task created with no participants is UNASSIGNED and will not appear in anyone's listMyTasks queue, so omitting it is how a checklist silently goes missing. Optionally set description (the detail/script for the step), taskType (a free-text label like "Call" or "Email"), and dealIds to also link the task to deals the key owner can access. THIS API HAS NO BULK/MULTI-TASK CALL — a multi-step checklist (onboarding SOP, drip of manual touches) is built by calling this op ONCE PER STEP, in order, staggering each step's dueDate so the sequence is workable. The PRODUCT adds the OTHER axis, not this one: the Contacts table's bulk-action bar creates ONE task across a whole contact selection in a single action (its own words: "one task per contact"), so a checklist over many contacts is STILL one action per step even there. Hand that over when the ask is many CONTACTS — and never promise a whole multi-step checklist in one click, here or in the app; the response echoes the contact's FULL task list every time, so use the last call's list to confirm the whole checklist landed rather than re-reading it. Confirm the plan with the user before creating tasks on their behalf.

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
