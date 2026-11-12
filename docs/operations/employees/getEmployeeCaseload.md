<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getEmployeeCaseload

query · domain `employees` · requires the READ scope

The contacts one AI employee has run on, newest attachment first, offset-paged (`offset`, `limit`; `total` is the full count). Each row says whether it is working that contact now, when it last worked it, the next run of a repeating schedule (`attachment.schedule`), the soonest follow-up it booked itself (`nextBookedFollowUpAt`, null when none), and whether the contact replied or escalated. A new touch on a contact with one booked comes before that follow-up. `includeRemoved` is ignored: contacts a person took it off are always listed.

## Call

```ts
const result = await client.employees.getEmployeeCaseload({ employeeId: '<id>' })
// → Promise<GetEmployeeCaseloadQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetEmployeeCaseloadQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `employeeId` | `ID!` | yes | — |
| `offset` | `Int` | no | 0 |
| `limit` | `Int` | no | 25 |
| `includeRemoved` | `Boolean` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 100.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesQuery": {
    "contactAgentCaseload": {
      "total": true,
      "items": {
        "contactId": true,
        "contactName": true,
        "isWorkingNow": true,
        "lastWorkedAt": true,
        "lastCommunicationAt": true,
        "nextBookedFollowUpAt": true,
        "attachment": {
          "id": true,
          "source": true,
          "createdAt": true,
          "schedule": {
            "nextFireAt": true
          },
          "engagement": {
            "receivedReply": true,
            "positivelyEscalated": true,
            "negativeIntent": true
          }
        }
      }
    }
  }
}
```
