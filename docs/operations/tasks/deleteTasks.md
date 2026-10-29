<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteTasks

mutation · domain `tasks` · requires the WRITE scope

deleteTask for many: items [{ id: taskId, contactId }] (up to 200), each task on its own contact; returns deletedCount. Same rules: no undo. List them; needs their yes (Ask Goliath: bulk card). An appointment is refused (deleteAppointment).

## Call

```ts
const result = await client.tasks.deleteTasks({ items: [<DeleteTaskInput>] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteTasksMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteTasksMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `items` | `[DeleteTaskInput!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "tasksMutation": {
    "deletedCount": true
  }
}
```
