<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# attachEmployeeMailbox

mutation · domain `employees` · requires the WRITE scope

Give an AI employee a mailbox to email from and be woken by (`mailboxId` from listEmployeeChannelOptions): a connected inbox, shared with the organization, with a live connection, that no other employee owns. On an employee that is switched on it takes effect on its next run: needs their yes; a card’s counts.

## Call

```ts
const result = await client.employees.attachEmployeeMailbox({ employeeId: '<id>', mailboxId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AttachEmployeeMailboxMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AttachEmployeeMailboxMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "attachContactAgentMailbox": {
      "id": true,
      "mailboxes": {
        "id": true,
        "emailAddress": true,
        "hasActiveConnection": true
      },
      "updatedAt": true
    }
  }
}
```
