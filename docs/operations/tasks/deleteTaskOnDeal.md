<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteTaskOnDeal

mutation · domain `tasks` · requires the WRITE scope

deleteTask ONLY for a row whose contact is null, by taskId + its dealId; refused like updateTaskOnDeal for a contact (use deleteTask), an appointment (deleteAppointment) or a task the non-admin key is not on. Same rules.

## Call

```ts
const result = await client.tasks.deleteTaskOnDeal({ taskId: '<id>', dealId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteTaskOnDealMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteTaskOnDealMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `taskId` | `ID!` | yes | — |
| `dealId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "tasksMutation": {
    "deleteTaskOnDeal": {
      "id": true,
      "tasks": {
        "id": true,
        "title": true
      }
    }
  }
}
```
