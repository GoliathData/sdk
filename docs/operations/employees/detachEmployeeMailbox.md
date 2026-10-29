<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# detachEmployeeMailbox

mutation · domain `employees` · requires the WRITE scope

Take a mailbox off an AI employee (an id from getEmployee `mailboxes`): it stops emailing from it and is no longer woken by mail to it. Safe to repeat. On an employee that is switched on it takes effect on its next run: needs their yes; a card’s counts.

## Call

```ts
const result = await client.employees.detachEmployeeMailbox({ employeeId: '<id>', mailboxId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DetachEmployeeMailboxMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DetachEmployeeMailboxMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `employeeId` | `ID!` | yes | — |
| `mailboxId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "detachContactAgentMailbox": {
      "id": true,
      "mailboxes": {
        "id": true,
        "emailAddress": true
      },
      "updatedAt": true
    }
  }
}
```
