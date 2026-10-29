<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createTaskOnDeal

mutation · domain `tasks` · requires the WRITE scope

Create a to-do task on a deal with no contact: pipeline work that belongs to the deal (order the title search, chase the inspection report). dealId from findDeals/getDeal. createTaskOnContact's rules apply: timezone is the zone the due day is read in, participants (getMyProfile/listTeammates) put it in a real queue (none = unassigned, invisible to listMyTasks), and a multi-step checklist is one call per step with staggered due dates. The response echoes the deal's full task list; getDeal `tasks` reads it too (never listContactTasks). Edit or delete it with updateTaskOnDeal / deleteTaskOnDeal. From a chat, a deal holding an open task refuses the create and names it: ask whether to move that one or add another, then resend with alongsideOpenTasks: true. Confirm with the user before creating tasks for them.

## Call

```ts
const result = await client.tasks.createTaskOnDeal({ dealId: '<id>', title: '<text>', dueDate: <DateTime>, timezone: <Timezone> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateTaskOnDealMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateTaskOnDealMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `dealId` | `ID!` | yes | — |
| `title` | `String!` | yes | — |
| `dueDate` | `DateTime!` | yes | — |
| `timezone` | `Timezone!` | yes | — |
| `description` | `String` | no | — |
| `taskType` | `String` | no | — |
| `participants` | `[String!]` | no | — |
| `alongsideOpenTasks` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "tasksMutation": {
    "createTaskOnDeal": {
      "id": true,
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
