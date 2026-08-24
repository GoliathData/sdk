<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listMyTasks

query · domain `tasks` · requires the READ scope

The key owner's OWN working queue — CRM to-do tasks (follow-ups, call-backs; appointments live under listAppointments). WHOSE TASKS: with no participants filter, the key owner's, for every role — the gateway defaults participants to the key owner, so the name is true. Pass userIds in participants (listTeammates, same-org) for someone else's queue or a team backlog; a MEMBER/ISA key stays narrowed to itself regardless, and a team-admin key sees only tasks on contacts THE KEY OWNER CAN ACCESS, never a complete backlog. A task with no participants is unassigned and appears in neither. Every row carries participants — WHO IT BELONGS TO; read them before acting, never assume the reader owns what came back. OVERDUE IS A CALENDAR-DAY BUCKET: due before TODAY in the given timezone, so a task due 9am that it is now 8pm on is TODAY, not OVERDUE — though the user would call it overdue. For 'past due right now' read completed: false with dueBefore at the current instant, and say which you used. Also filter by taskStatus TODAY/FUTURE, completed, a dueBefore/dueAfter window, searchTerm; pass timezone for correct day boundaries. Rows carry dueDate, completedAt, and the linked contact (id + name) — the contactId completeTask and listContactTasks need. Returns the unpaged total; page by narrowing the dueBefore/dueAfter window — THIS OPERATION threads no cursor variable. The underlying feed IS cursor-paginated and the app's task list scrolls the whole backlog, so deep paging is a capability this API does not expose, NOT a missing product feature — send the user to the app for a long scroll.

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
        "participants": {
          "id": true,
          "firstName": true,
          "lastName": true
        }
      },
      "total": true
    }
  }
}
```
