<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# cancelEmployeeFollowUp

mutation · domain `employees` · requires the WRITE scope

Cancel a follow-up an AI employee booked on a contact before it runs (`followUpId`: a FOLLOW_UP row's `id` from getContactEmployees' `upcomingAgentRuns`). A CRON row is a schedule: clearEmployeeSchedule. Returns CANCELLED, or NOT_FOUND when it already ran or is not this contact's.

## Call

```ts
const result = await client.employees.cancelEmployeeFollowUp({ contactId: '<id>', followUpId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CancelEmployeeFollowUpMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CancelEmployeeFollowUpMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |
| `followUpId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "cancelAiEmployeeFollowUp": true
  }
}
```
