<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# clearEmployeeSchedule

mutation · domain `employees` · requires the WRITE scope

Drop the schedule of one employee on one contact (`attachmentId` from getContactEmployees). It stays on the contact and still answers when the contact writes in. Safe to repeat. A booked FOLLOW_UP is not a schedule: that is cancelEmployeeFollowUp.

## Call

```ts
const result = await client.employees.clearEmployeeSchedule({ attachmentId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ClearEmployeeScheduleMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ClearEmployeeScheduleMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `attachmentId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "clearAiEmployeeSchedule": {
      "id": true,
      "agentId": true,
      "status": true
    }
  }
}
```
