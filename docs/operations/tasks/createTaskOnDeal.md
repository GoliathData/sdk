<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createTaskOnDeal

mutation · domain `tasks` · requires the WRITE scope

Create a to-do task attached directly to a deal, with no contact required — for pipeline work that belongs to the deal itself (order the title search, chase the inspection report, send the addendum) rather than to a person. Requires dealId (from findDeals/getDeal), title, dueDate, and timezone; optionally description, taskType, and participants. The same rules as createTaskOnContact apply: timezone is the zone the due date's local day is read in, participants (user ids from getMyProfile/listTeammates) are what put the task in a real queue — omit them and the task is unassigned and invisible to listMyTasks — and THIS API has no bulk call, so a multi-step deal checklist is one call per step with staggered due dates. The response echoes the deal with its full linked-task list, so the last call confirms the whole set — and it is the only read-back available here, since a deal-only task has no contact and so never shows up in listContactTasks. Confirm with the user before creating tasks on their behalf.

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
      "title": true,
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
