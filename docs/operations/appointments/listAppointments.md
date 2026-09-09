<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listAppointments

query · domain `appointments` · requires the READ scope

List appointments — org-wide for a team-admin key, the key owner's own otherwise (MEMBER/ISA keys always see only their own regardless of filters). Optionally filter by participants (userIds from listTeammates, same-org only), a startDate/endDate window, completed, and a searchTerm. Returns each appointment with times, location, linked contacts, and participants. A startDate/endDate window is still the natural calendar-style read; the cursor is for walking a long list to its end. PAGING: this operation IS cursor-paginated, so "show me the rest" is answerable here. When canFetchNext is true, re-call with the SAME filters and cursor set to the LAST row's id to get the rows after it; repeat until canFetchNext is false. Forward only — there is no backwards page, so to revisit earlier rows restart from the top. Keep every filter identical between pages; changing one restarts the walk. total is the unpaged match count for the filters, so nothing is silently truncated. This is a LIST, not a conflict check — it sees only what Goliath has recorded as an appointment; use checkAvailability to find out whether a slot is actually free.

## Call

```ts
const result = await client.appointments.listAppointments()
// → Promise<ListAppointmentsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListAppointmentsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `participants` | `[String!]` | no | — |
| `startDate` | `DateTime` | no | — |
| `endDate` | `DateTime` | no | — |
| `completed` | `Boolean` | no | — |
| `searchTerm` | `String` | no | — |
| `limit` | `Int` | no | 25 |
| `cursor` | `String` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "users": {
    "getUserAppointments": {
      "tasks": {
        "id": true,
        "title": true,
        "startDate": true,
        "endDate": true,
        "timezone": true,
        "location": true,
        "description": true,
        "outcome": true,
        "completedAt": true,
        "appointmentReminderWorkflowGroupId": true,
        "participants": {
          "id": true,
          "firstName": true,
          "lastName": true
        },
        "contacts": {
          "id": true,
          "name": true
        }
      },
      "total": true,
      "canFetchNext": true
    }
  }
}
```
