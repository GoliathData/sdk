<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listContactActivities

query · domain `contacts` · requires the READ scope

List a contact's activity timeline — calls, texts, emails, notes, and system events — most recent first. Filter with activityTypes (e.g. [CALL, TEXT, EMAIL]) and direction (INBOUND/OUTBOUND); page with limit/offset (default 25, max 50). Each entry inlines the matching call/text/email/note payload — notes and texts carry their full text, calls carry their summary, and emails carry BOTH `snippet` (a short preview) and `textExtract` (the FULL plain-text body). Read textExtract, not snippet, whenever the question is whether something appears in this contact's history: the preview stops after a line or two, so a detail further down is invisible in snippet and you would wrongly report it absent. textExtract is NULL on the ~3% of emails that arrived HTML-only — their body is not readable through this op AT ALL. A null textExtract means UNREAD, not empty: never conclude from one that the email lacks what you are looking for. Say which emails you could not read and send the user to the contact's timeline in the app. On a NOTE entry, read the note's own `author` — { kind: USER | AI, id, name } — to say who wrote it: the entry-level `createdByUser` is null for a note an AI assistant wrote on a teammate's behalf. An UPDATED_TASK entry carries `metadata.oldValues` (title, endDate, timezone, taskType, participants) plus `newValues.endDate` — THE UNDO PATH for a task edit, and the only durable record of a prior value since Task keeps no history. Reverse an edit by writing oldValues back with updateTask; never call a previous value unrecoverable without having looked. Only tasks WITH a contact get one, one per edit, so the oldest holds the pre-change value. This is the heavier history read; getContact does not include the activity feed.

## Call

```ts
const result = await client.contacts.listContactActivities({ contactId: '<id>' })
// → Promise<ListContactActivitiesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListContactActivitiesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |
| `limit` | `Int` | no | 25 |
| `offset` | `Int` | no | 0 |
| `activityTypes` | `[ActivityType!]` | no | — |
| `direction` | `ActivityDirection` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

Keys like `"... on TypeName"` are type-conditional: those fields are present only when the object resolves to that concrete type.

```json
{
  "contactQuery": {
    "contact": {
      "id": true,
      "activities": {
        "id": true,
        "type": true,
        "createdAt": true,
        "isFromTeamMember": true,
        "createdByUser": {
          "id": true,
          "firstName": true,
          "lastName": true
        },
        "note": {
          "id": true,
          "body": true,
          "createdAt": true,
          "author": {
            "kind": true,
            "id": true,
            "name": true
          }
        },
        "call": {
          "id": true,
          "direction": true,
          "durationSeconds": true,
          "status": true,
          "summary": true,
          "recordingUrl": true,
          "disposition": true,
          "dispositionNote": true,
          "fromPhoneNumber": true,
          "toPhoneNumber": true,
          "createdAt": true
        },
        "text": {
          "id": true,
          "message": true,
          "direction": true,
          "fromPhoneNumber": true,
          "toPhoneNumber": true,
          "createdAt": true
        },
        "email": {
          "id": true,
          "subject": true,
          "snippet": true,
          "textExtract": true,
          "fromEmail": true,
          "fromName": true,
          "toEmails": true,
          "direction": true,
          "internalDate": true
        },
        "metadata": {
          "... on UpdatedTaskActivityMetadata": {
            "taskId": true,
            "oldValues": {
              "title": true,
              "endDate": true,
              "timezone": true,
              "taskType": true,
              "participants": true
            },
            "newValues": {
              "endDate": true
            }
          }
        }
      }
    }
  }
}
```
