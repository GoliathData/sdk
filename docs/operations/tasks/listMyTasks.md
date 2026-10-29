<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listMyTasks

query · domain `tasks` · requires the READ scope

The key owner's OWN to-do queue (appointments, never OVERDUE here: listAppointments). With no participants filter it is the key owner's, for every role. Pass userIds in participants (listTeammates, same-org) for a teammate's queue or a team backlog; a MEMBER key stays narrowed to itself regardless, and a team-admin key sees only tasks on contacts THE KEY OWNER CAN ACCESS, never a complete backlog. A task with no participants is unassigned and appears in neither. Each row's participants say WHO IT BELONGS TO: read them before acting, never assume the reader owns what came back. OVERDUE is INCOMPLETE tasks due before TODAY in timezone, so a task due 9am today is not in it. For what is overdue or past due, read completed: false with dueBefore now. Also filter by taskStatus TODAY/FUTURE, completed, dueBefore/dueAfter, searchTerm; timezone sets day boundaries: EST/CST/MST/AZ/PST/HST or that zone's IANA name (America/New_York, America/Chicago, America/Denver, America/Phoenix, America/Los_Angeles, Pacific/Honolulu; AZ is Arizona, which keeps MST all year); any other is refused. Rows carry dueDate, completedAt, the contact (id + name: the contactId completeTask needs; null when it has none) and deals (the dealId updateTaskOnDeal needs when contact is null). PAGING: this operation IS cursor-paginated, so "show me the rest" is answerable here. When canFetchNext is true, re-call with the SAME filters and cursor set to the LAST row's id to get the rows after it; repeat until canFetchNext is false. Forward only — there is no backwards page, so to revisit earlier rows restart from the top. Keep every filter identical between pages; changing one restarts the walk. total is the unpaged match count for the filters, so nothing is silently truncated. Order: latest-due first with dueBefore/OVERDUE and no dueAfter/TODAY/FUTURE; completed: true by latest completion; else soonest-first, open first.

## Call

```ts
const result = await client.tasks.listMyTasks()
// → Promise<ListMyTasksQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListMyTasksQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `taskStatus` | `TaskStatus` | no | — |
| `completed` | `Boolean` | no | — |
| `dueBefore` | `DateTime` | no | — |
| `dueAfter` | `DateTime` | no | — |
| `searchTerm` | `String` | no | — |
| `participants` | `[String!]` | no | — |
| `timezone` | `Timezone` | no | — |
| `limit` | `Int` | no | 25 |
| `cursor` | `String` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "users": {
    "getUserTasks": {
      "tasks": {
        "id": true,
        "title": true,
        "description": true,
        "taskType": true,
        "dueDate": true,
        "timezone": true,
        "completedAt": true,
        "contact": {
          "id": true,
          "name": true
        },
        "deals": {
          "id": true
        },
        "participants": {
          "id": true,
          "firstName": true,
          "lastName": true
        }
      },
      "total": true,
      "canFetchNext": true
    }
  }
}
```
