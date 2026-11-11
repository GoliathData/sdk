<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# detachEmployeeFromContacts

mutation · domain `employees` · requires the WRITE scope

Remove contacts from an AI employee's list (at most 200 ids per call), so it stops answering them, and drop its schedule on them; the history stays. `changedCount` is how many were removed. When `interruptedContactId` is set the batch stopped there (`interruptedReason` says why): the contacts before it are done, so send that one and the rest again. Confirm with the person first.

## Call

```ts
const result = await client.employees.detachEmployeeFromContacts({ employeeId: '<id>', contactIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DetachEmployeeFromContactsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DetachEmployeeFromContactsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "detachAiEmployeeFromContacts": {
      "requestedCount": true,
      "changedCount": true,
      "interruptedContactId": true,
      "interruptedReason": true
    }
  }
}
```
