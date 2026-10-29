<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# attachEmployeeToContacts

mutation · domain `employees` · requires the WRITE scope

Put an AI employee on contacts (at most 200 ids per call; send more in further calls). It then answers those contacts' texts, emails and calls and works them. The employee must be switched on (setEmployeeStatus) and every contact one the key owner can open. Recorded as the key owner's own assignment, so a contact someone took the employee off is put back because you named it. `changedCount` is how many it was newly put on; the rest already had it. When `interruptedContactId` is set the batch stopped there (`interruptedReason` says why): the contacts before it are done, so send that one and the rest again. Confirm the contacts with the person first.

## Call

```ts
const result = await client.employees.attachEmployeeToContacts({ employeeId: '<id>', contactIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AttachEmployeeToContactsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AttachEmployeeToContactsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `employeeId` | `ID!` | yes | — |
| `contactIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "attachAiEmployeeToContacts": {
      "requestedCount": true,
      "changedCount": true,
      "interruptedContactId": true,
      "interruptedReason": true
    }
  }
}
```
