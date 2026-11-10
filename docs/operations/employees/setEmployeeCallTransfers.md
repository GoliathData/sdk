<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setEmployeeCallTransfers

mutation · domain `employees` · requires the WRITE scope

Set who an AI employee puts a live call through to when a caller asks for someone. `destinations` REPLACES the saved list (send every one to keep; `[]` turns transfers off): each is `{ name, phoneLineId }`, `name` the person as callers ask for them (unique ignoring case), `phoneLineId` one of the organization's own lines, an `organization.twilioPhoneNumbers[].id` from listCommunicationChannels (its `user.id` is the teammate the line belongs to; listTeamMembers names them). At most 10. The call rings that line's routing, so a number the organization does not own, such as a personal cell, cannot be one. This is the live transfer: a line in its instructions alone makes it say it is transferring on a call that never connects. Refused on an employee with no call channel (getEmployee `configDocument.channels.callConfig` absent). Pass `expectedUpdatedAt`. On an employee that is switched on it takes effect on its next run: needs their yes; a card’s counts.

## Call

```ts
const result = await client.employees.setEmployeeCallTransfers({ employeeId: '<id>', destinations: [<ContactAgentCallTransferDestinationInput>] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetEmployeeCallTransfersMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetEmployeeCallTransfersMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `employeeId` | `ID!` | yes | — |
| `destinations` | `[ContactAgentCallTransferDestinationInput!]!` | yes | — |
| `expectedUpdatedAt` | `DateTime` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "setAiEmployeeCallTransfers": {
      "id": true,
      "name": true,
      "config": {
        "channels": {
          "callConfig": {
            "transferDestinations": {
              "name": true,
              "phoneLineId": true
            }
          }
        }
      },
      "updatedAt": true
    }
  }
}
```
