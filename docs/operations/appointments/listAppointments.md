<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listAppointments

query · domain `appointments` · requires the READ scope

List appointments — org-wide for a team-admin key, the key owner's own otherwise (MEMBER/ISA keys always see only their own regardless of filters). Optionally filter by participants (userIds from listTeammates, same-org only), a startDate/endDate window, completed, and a searchTerm. Returns each appointment with times, location, linked contacts, and participants, plus the unpaged total. To page beyond the limit, narrow the startDate/endDate window (calendar-style) — THIS OPERATION threads no cursor variable. The underlying feed IS cursor-paginated, so deep paging is a capability this API does not expose, NOT a missing product feature.

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
      "total": true
    }
  }
}
```
