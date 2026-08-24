<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getCallRecording

query · domain `conversations` · requires the READ scope

One call's RECORDING and TRANSCRIPT, plus the outcome logged for it: a time-limited signed audio URL (recordingUrl), the speaker-by-speaker transcript ({ speaker, text, start, end }), the AI summary, the dialer disposition + dispositionNote, direction, status, durationSeconds, createdAt, who handled it (author — a person or an AI employee) and both phone numbers. callId comes from a CALL row in listInboxThreads (its id, or any id in groupedCallIds), or from a CALL entry in listContactActivities. Returns NULL — not an error — when the call has NO RECORDING, when it is not your organization's, or when no such call exists; those three are indistinguishable by design, so a null is not evidence the call did not happen. A call with no recording has no transcript either, and no summary — the summary is enrichment derived from the recording. So for those calls read listContactActivities instead: its CALL entries carry direction, durationSeconds, status, disposition and dispositionNote for every call on a contact, recorded or not, which is the logged OUTCOME even when there is no audio. Reading here has NO side effect — it deliberately does not mark the call seen, so an agent sweeping calls cannot silently clear an operator's unread badges. recordingUrl expires; fetch it when you are about to use it rather than storing it, and re-run this operation to re-sign.

## Call

```ts
const result = await client.conversations.getCallRecording({ callId: '<id>' })
// → Promise<GetCallRecordingQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetCallRecordingQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `callId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "callsQuery": {
    "callRecording": {
      "id": true,
      "recordingUrl": true,
      "transcript": {
        "speaker": true,
        "text": true,
        "start": true,
        "end": true
      },
      "summary": true,
      "disposition": true,
      "dispositionNote": true,
      "direction": true,
      "status": true,
      "durationSeconds": true,
      "createdAt": true,
      "seen": true,
      "contactName": true,
      "contactE164PhoneNumber": true,
      "fromPhoneNumber": true,
      "toPhoneNumber": true,
      "author": {
        "kind": true,
        "id": true,
        "name": true
      },
      "agentName": true
    }
  }
}
```
