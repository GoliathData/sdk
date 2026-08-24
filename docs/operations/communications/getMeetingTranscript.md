<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getMeetingTranscript

query · domain `communications` · requires the READ scope

The full speaker-by-speaker transcript behind a meeting-summary note, as a PAGEABLE window of ordered { speaker, text } utterances. When the Goliath notetaker attends a meeting, the summary lands as an AI note on each meeting contact and the complete transcript is archived separately — this operation reads that archive. Pass the noteId of the meeting-summary note (from getContact notes[] or a NOTE entry in listContactActivities). Use it whenever the summary is not enough — extracting commitments, action items, exact quotes, pricing figures, or who-said-what. PAGE THE WHOLE MEETING before concluding: a full page (as many utterances as you asked for) means more remain — request again with offset advanced by the count you received until a short page arrives. Action items cluster near the END of a meeting, so an unpaged first window is exactly the wrong place to stop. Returns null (not an error) when the note is not a meeting-summary note, the note is hidden from the caller, or no archive exists; a null on a random note means "this note has no meeting transcript", not a failure. The meeting notetaker is feature-flag gated per org — where the flag is off this operation is refused, which also means no workspace has summary notes to point at it. Quote selectively rather than echoing whole pages back to the user.

## Call

```ts
const result = await client.communications.getMeetingTranscript({ noteId: '<id>' })
// → Promise<GetMeetingTranscriptQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetMeetingTranscriptQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `noteId` | `ID!` | yes | — |
| `offset` | `Int` | no | 0 |
| `limit` | `Int` | no | 150 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 300.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "meetingNotetakerQuery": {
    "transcriptForNote": {
      "speaker": true,
      "text": true
    }
  }
}
```
