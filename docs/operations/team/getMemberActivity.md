<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getMemberActivity

query · domain `team` · requires the READ scope

WHAT ONE PERSON DID in a time window — "what did I do today", "how was my week", "what did Sam get done yesterday" — in ONE call: their own texts (sent/delivered/failed), calls (outbound, inbound, connected, conversations, talkSeconds), emailsSent, notesWritten, tasksCreated, appointmentsBooked, tasksCompleted and dealStageMoves. Counts only, live. Use it instead of combining countOutboundTexts, getTeamCallStats and timeline reads. WINDOW: startDate (inclusive) and endDate (exclusive) as ISO datetimes WITH an offset, resolved in the USER's timezone (getMyProfile.resolvedTimezone): "today" is local midnight to now or to the next midnight. At most 93 calendar days; wider is REFUSED. WHO: omit userId for the key owner; naming a teammate needs VIEW_ALL_PHONES (org admins hold it) and is REFUSED otherwise. WHAT IS THEIRS: only work the person did themselves; an AI employee, a workflow or an outreach tool working on their behalf is never counted, nor is a bulk action or import, and notes, tasks and appointments count when made by hand in the app (texts and calls follow countOutboundTexts and getTeamCallStats). emailsSent is outbound mail from their connected mailbox. tasksCompleted is tasks they are on that were completed in the window (who ticked it is not recorded). dealStageMoves is moves they made by hand. For the records themselves, read the timeline or lists afterwards.

## Call

```ts
const result = await client.team.getMemberActivity({ startDate: <DateTime>, endDate: <DateTime> })
// → Promise<GetMemberActivityQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetMemberActivityQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `startDate` | `DateTime!` | yes | — |
| `endDate` | `DateTime!` | yes | — |
| `userId` | `ID` | no | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "teamAnalyticsQuery": {
    "memberActivity": {
      "startDate": true,
      "endDate": true,
      "userId": true,
      "name": true,
      "texts": {
        "sent": true,
        "delivered": true,
        "failed": true
      },
      "calls": {
        "outboundCalls": true,
        "inboundCalls": true,
        "connectedCalls": true,
        "conversationCalls": true,
        "talkSeconds": true
      },
      "emailsSent": true,
      "notesWritten": true,
      "tasksCreated": true,
      "appointmentsBooked": true,
      "tasksCompleted": true,
      "dealStageMoves": true
    }
  }
}
```
