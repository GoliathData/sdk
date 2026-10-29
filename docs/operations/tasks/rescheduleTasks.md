<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# rescheduleTasks

mutation · domain `tasks` · requires the WRITE scope

Move MANY tasks to ONE due date in one call ('all my overdue tasks to tomorrow'): taskIds (up to 200, from listMyTasks) OR dueBefore + expectedCount: the key owner's own open tasks due before then, never their ids (up to 500), moved only if exactly expectedCount (listMyTasks' total); dueDate (ISO) and timezone (the user's zone; every task gets it). Each task is saved as updateTask saves it (contact tasks get their UPDATED_TASK timeline entry; deal tasks, which have none, keep no old date); no contactId needed. By ids it does NOT check ownership: a teammate's contact task the key owner can see moves too, so read participants first (a dueBefore selection: only tasks the key owner is on). Every task is checked first, and nothing moves (the refusal names the ids) if any is deleted, an APPOINTMENT (use updateAppointment), on a contact the key owner cannot access, or, for a non-admin key, a contact-less task the key owner is not on. A save failing after that names the ids that did not move: retry only those. Confirm first. Ask Goliath: bulk card.

## Call

```ts
const result = await client.tasks.rescheduleTasks({ dueDate: <DateTime>, timezone: <Timezone> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RescheduleTasksMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RescheduleTasksMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `taskIds` | `[ID!]` | no | — |
| `dueBefore` | `DateTime` | no | — |
| `expectedCount` | `Int` | no | — |
| `dueDate` | `DateTime!` | yes | — |
| `timezone` | `Timezone!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "tasksMutation": {
    "rescheduleTasks": {
      "id": true,
      "title": true,
      "dueDate": true
    }
  }
}
```
