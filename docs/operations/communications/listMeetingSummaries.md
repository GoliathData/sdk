<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listMeetingSummaries

query · domain `communications` · requires the READ scope

The organization's notetaker calls created after `after`, in any status, oldest first: each call's status (COMPLETED and FAILED are terminal), summary note id and text (null when the key owner may not read it), who sent the notetaker, the appointment title, and the meeting contacts with the contacts connected to each. At most 50 per page; advance `after` to the last `startedAt`. Read a call transcript with getMeetingTranscript(noteId).

## Call

```ts
const result = await client.communications.listMeetingSummaries({ after: <DateTime> })
// → Promise<ListMeetingSummariesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListMeetingSummariesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `after` | `DateTime!` | yes | — |
| `limit` | `Int` | no | 25 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "meetingNotetakerQuery": {
    "recentSummaries": {
      "sessionId": true,
      "externalBotId": true,
      "status": true,
      "startedAt": true,
      "noteId": true,
      "summarizedAt": true,
      "requestedByEmail": true,
      "appointmentTitle": true,
      "summary": true,
      "contacts": {
        "id": true,
        "connectedContactIds": true
      }
    }
  }
}
```
