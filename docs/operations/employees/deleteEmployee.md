<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteEmployee

mutation · domain `employees` · requires the WRITE scope

Delete an AI employee, the employee page's Fire. It is taken off every contact (their schedules go), its mailboxes and lines are released and its forms stop waking it; its history stays, but it cannot be brought back. Admins only: a member is refused, so check getMyProfile's `organizationRole` first and tell a member an organization admin has to fire it. Refused while anything still names it (a workflow step, a saved filter, an automation trigger, an assignment policy); the refusal lists what to change first. Say its contact count (getEmployee's `commitments`). Needs their yes; a card's counts. To stop it for now, switch it off instead (setEmployeeStatus).

## Call

```ts
const result = await client.employees.deleteEmployee({ employeeId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteEmployeeMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteEmployeeMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `employeeId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "deleteContactAgent": true
  }
}
```
