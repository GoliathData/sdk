<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateTaskOnDeal

mutation · domain `tasks` · requires the WRITE scope

updateTask ONLY for a row whose contact is null, by taskId + its dealId (listMyTasks `deals`); one with a contact is refused (use updateTask), an appointment too, and for a non-admin key one it is not on. Same fields and rules; no timeline keeps old values: note them first to undo.

## Call

```ts
const result = await client.tasks.updateTaskOnDeal({ taskId: '<id>', dealId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateTaskOnDealMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateTaskOnDealMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `taskId` | `ID!` | yes | — |
| `dealId` | `ID!` | yes | — |
| `title` | `String` | no | — |
| `description` | `String` | no | — |
| `taskType` | `String` | no | — |
| `dueDate` | `DateTime` | no | — |
| `timezone` | `Timezone` | no | — |
| `participants` | `[String!]` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "tasksMutation": {
    "updateTaskOnDeal": {
      "id": true,
      "tasks": {
        "id": true,
        "title": true,
        "dueDate": true,
        "completedAt": true
      }
    }
  }
}
```
