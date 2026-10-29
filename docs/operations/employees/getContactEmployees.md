<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getContactEmployees

query · domain `employees` · requires the READ scope

The AI employees on one contact, as the contact page's card shows them. `aiEmployees[].id` is the attachment id setEmployeeSchedule and clearEmployeeSchedule take (`agentId` is the employee); `status` PAUSED means it stopped working this contact (REMOVED, with `includeRemoved`, means it was taken off); `isWorkingNow` means it is mid-conversation. `upcomingAgentRuns` is what they will do next, soonest first, AT MOST 25 with no total (when 25 come back more may be booked, so after acting on these read again before saying none are left): a CRON row is a schedule's next run, a FOLLOW_UP row a follow-up the employee booked itself, whose `id` cancelEmployeeFollowUp takes.

## Call

```ts
const result = await client.employees.getContactEmployees({ contactId: '<id>' })
// → Promise<GetContactEmployeesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetContactEmployeesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |
| `includeRemoved` | `Boolean` | no | false |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "contact": {
      "id": true,
      "aiEmployees": {
        "id": true,
        "agentId": true,
        "name": true,
        "status": true,
        "isWorkingNow": true,
        "schedule": {
          "cronExpression": true,
          "timezone": true,
          "status": true,
          "nextFireAt": true,
          "lastFiredAt": true,
          "maxRuns": true,
          "runCount": true
        }
      },
      "upcomingAgentRuns": {
        "id": true,
        "agentId": true,
        "agentName": true,
        "kind": true,
        "fireAt": true,
        "cronExpression": true,
        "timezone": true,
        "runsRemaining": true
      }
    }
  }
}
```
