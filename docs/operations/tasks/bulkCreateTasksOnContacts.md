<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# bulkCreateTasksOnContacts

mutation · domain `tasks` · requires the WRITE scope

The Contacts bulk bar's Add task: ONE task (createTaskOnContact's rules) on each of contactIds, as a background task (`bulkTaskId`, getBulkTask). assignToPointPerson gives each contact's task to that contact's point person instead of participants, and skips a contact with none. A checklist over many contacts is STILL one action per step. Confirm the task and the count first.

## Call

```ts
const result = await client.tasks.bulkCreateTasksOnContacts({ contactIds: ['<text>'], title: '<text>', dueDate: <DateTime>, timezone: <Timezone> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<BulkCreateTasksOnContactsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `BulkCreateTasksOnContactsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[String!]!` | yes | — |
| `title` | `String!` | yes | — |
| `dueDate` | `DateTime!` | yes | — |
| `timezone` | `Timezone!` | yes | — |
| `description` | `String` | no | — |
| `taskType` | `String` | no | — |
| `participants` | `[String!]` | no | — |
| `assignToPointPerson` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "tasksMutation": {
    "bulkCreateTasksOnContacts": {
      "bulkTaskId": true
    }
  }
}
```
