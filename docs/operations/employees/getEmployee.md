<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getEmployee

query · domain `employees` · requires the READ scope

One AI employee in full. `abilities` is what it can do RIGHT NOW, resolved (a tool missing from the stored config follows its default, and most defaults are on, so read `abilities`, never infer from the document). `config.wakes` is what wakes it. `mailboxes` and `triggerForms` are its channels; `legacyPhoneLines` lists only lines it still holds from before lines were shared, since an employee needs no number of its own (it texts on the number the conversation is on, otherwise a shared organization number): an empty list is the normal state, never something to attach, ask about or report; `defaultAssignees` who owns a contact it works when nobody does. `commitments`: `assignedContactCount` the contacts it is on, `scheduledContactCount` only those on a repeating schedule, and `bookedFollowUpContactCount` those with a follow-up it booked itself that has not run yet, so 0 scheduled never means no follow-up is coming. It holds no trust of its own: what it does on its own follows the trust of the person each act is for (the line or mailbox owner, else the contact's teammate, else its Manager), set on that person's Memory, Trust page. A text `sendWindow` holds only what it starts (follow-ups, outreach): its text reply to a lead who wrote in goes out at any hour. `configDocument` is the whole configuration as one JSON document; change part of it with updateEmployeeConfig's `edits` and `configPatch`. Webhook urls read back redacted and are kept on save. `updatedAt` is the `expectedUpdatedAt` to pass so a teammate's save in between is refused rather than overwritten.

## Call

```ts
const result = await client.employees.getEmployee({ employeeId: '<id>' })
// → Promise<GetEmployeeQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetEmployeeQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `employeeId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesQuery": {
    "contactAgent": {
      "id": true,
      "name": true,
      "title": true,
      "status": true,
      "origin": true,
      "canAnswerCalls": true,
      "cannotAnswerReason": true,
      "dailyRunCap": true,
      "dailyCallCap": true,
      "configDocument": true,
      "textHours": true,
      "quietHoursNotice": true,
      "abilities": {
        "tool": true,
        "label": true,
        "on": true,
        "explicitlySet": true,
        "gate": true
      },
      "config": {
        "wakes": {
          "inboundText": true,
          "inboundEmail": true,
          "callEnded": true,
          "meetingSummary": true,
          "formSubmitted": true,
          "inboundSlack": true,
          "teammateText": true,
          "teammateEmail": true,
          "teammateSlack": true,
          "otherEmployeeCallEnded": true,
          "dealStageEntered": true,
          "dealCreated": true,
          "contactNoteAdded": true,
          "dealNoteAdded": true,
          "taskCreated": true,
          "taskCompleted": true,
          "appointmentCreated": true,
          "appointmentChanged": true,
          "contactFieldChanged": true
        }
      },
      "legacyPhoneLines": {
        "id": true,
        "e164Number": true,
        "holderUserId": true
      },
      "mailboxes": {
        "id": true,
        "emailAddress": true,
        "provider": true,
        "hasActiveConnection": true
      },
      "triggerForms": {
        "id": true,
        "name": true,
        "status": true
      },
      "defaultAssignees": {
        "mode": true,
        "assigneeUserIds": true
      },
      "commitments": {
        "assignedContactCount": true,
        "scheduledContactCount": true,
        "bookedFollowUpContactCount": true,
        "openSessionCount": true
      },
      "createdAt": true,
      "updatedAt": true
    }
  }
}
```
