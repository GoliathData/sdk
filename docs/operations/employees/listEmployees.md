<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listEmployees

query · domain `employees` · requires the READ scope

The organization's AI employees: id, name, job title, status (ACTIVE = working, INACTIVE = hired but switched off), the template it started from, whether it can answer calls, and how many contacts it is on. `contactAgentCounts` counts that list (`total`, `active`, `inactive`): quote those numbers for how many employees there are and how many are on or off, never a tally of the rows. `textHours` is when it starts texts, in words (anytime when none is set), and `quietHoursNotice` the quiet-hours note to say when the window crosses 8 AM to 9 PM: what hours each texts are answered from this one read, never a getEmployee per employee (a roster past about 100 employees ends in an omitted marker naming the rest: read those with getEmployee). The `id` is the `employeeId` every other employee operation takes. Start here.

## Call

```ts
const result = await client.employees.listEmployees()
// → Promise<ListEmployeesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListEmployeesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesQuery": {
    "contactAgents": {
      "id": true,
      "name": true,
      "title": true,
      "status": true,
      "origin": true,
      "canAnswerCalls": true,
      "commitments": {
        "assignedContactCount": true,
        "scheduledContactCount": true,
        "bookedFollowUpContactCount": true,
        "openSessionCount": true
      },
      "textHours": true,
      "quietHoursNotice": true,
      "createdAt": true,
      "updatedAt": true
    },
    "contactAgentCounts": {
      "total": true,
      "active": true,
      "inactive": true
    }
  }
}
```
