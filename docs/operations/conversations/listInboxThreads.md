<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listInboxThreads

query · domain `conversations` · requires the READ scope

The inbox: text conversations, calls and email threads in ONE most-recent-first feed. This is the org-side read for "did they text back", "what is unread", "who has not been replied to" — questions that name no contact, which is exactly what listContactActivities (per-contact, needs a contactId) cannot answer. Each row carries the channel in `type` (MESSAGE | CALL | EMAIL) and only the fields that channel has: a MESSAGE row carries mostRecentMessage (with its full body) + messagesCount + replySentiment; a CALL row carries status/durationSeconds/summary/hasRecording and, for a grouped day of calls, groupCount + groupedCallIds; an EMAIL row carries subject/snippet/fromEmail/toEmails + emailThreadId. Rows are PREVIEWS — one message deep. To read a whole conversation, follow the id: a MESSAGE row's id is the conversationId for getTextThreadMessages, an EMAIL row's emailThreadId is the threadId for getEmailThread, and a CALL row (or an id from groupedCallIds) goes to getCallRecording. FILTERS: `seen: false` is unread (one flag across all three channels — a text conversation's seen, a call's seen, an email's isRead); `channel` narrows to CALLS | MESSAGES | EMAILS | MISSED_CALLS | UNRESPONDED | NEEDS_RESPONSE; `respondedOnly: true` keeps only threads the contact has replied on at least once; `sentBy` keeps threads with an outbound message from HUMAN, AI_EMPLOYEE and/or WORKFLOW (a campaign) — `sentBy: [WORKFLOW], respondedOnly: true` is "who replied to a campaign"; `replySentiments` keeps threads whose most recent inbound reply was classified POSITIVE | NEUTRAL | NEGATIVE | OPT_OUT | UNREACHABLE. WHICH FILTERS REACH CALLS: `respondedOnly` and `replySentiments` do not apply to a call at all (a call has no reply to classify), so setting either drops CALL rows from the feed entirely. `sentBy` DOES filter calls — a call is AI_EMPLOYEE when it carries an AI-employee author and HUMAN when it does not — with one structural gap: a call carries no campaign linkage, so `sentBy: [WORKFLOW]` matches no call and that query returns texts and emails only. `searchTerm` matches message/email text and participant names. PAGING is keyset and per channel: the response returns nextCallCursor, nextSmsCursor and nextEmailCursor, and the next page passes each one back as callCursor/smsCursor/emailCursor. Pass ALL THREE back exactly as received — dropping a NON-NULL cursor restarts that channel from the top and repeats rows you already read. Do NOT read a single null cursor as "that channel is finished": a channel also comes back null when `channel` filtered it out, and when its rows were all older than this page's newest so it has not served you anything yet. Sending a null back as null is correct in every one of those cases and repeats nothing. THE FEED IS DONE only when a response carries ALL THREE cursors null — keep requesting while any one of them is non-null, and do not stop on an empty page while a cursor remains. limit is per page across the merged feed (default 25, max 50). SCOPE: with no `userIds` this is the KEY OWNER'S OWN inbox — their lines, their mailbox — which is the same thing the app shows them, not an org-wide firehose. Naming a teammate in `userIds` reads their inbox only if the key owner holds VIEW_ALL_PHONES; without it the request is REFUSED (an error), which is different from an empty page. An EMPTY items list means nothing in your own inbox matched these filters — it never means the org has no messages, and it is not a permission failure. Teammate ids come from listTeammates.

## Call

```ts
const result = await client.conversations.listInboxThreads()
// → Promise<ListInboxThreadsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListInboxThreadsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `limit` | `Int` | no | 25 |
| `sort` | `SortDirection` | no | DESC |
| `channel` | `InboxFilterType` | no | ALL |
| `seen` | `Boolean` | no | — |
| `respondedOnly` | `Boolean` | no | — |
| `sentBy` | `[InboxSentBy!]` | no | — |
| `replySentiments` | `[ReplySentiment!]` | no | — |
| `searchTerm` | `String` | no | — |
| `userIds` | `[ID!]` | no | — |
| `callCursor` | `CursorInput` | no | — |
| `smsCursor` | `CursorInput` | no | — |
| `emailCursor` | `CursorInput` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "inboxQuery": {
    "paginateInbox": {
      "items": {
        "id": true,
        "type": true,
        "createdAt": true,
        "seen": true,
        "contactName": true,
        "contactE164PhoneNumber": true,
        "twilioPhoneNumberId": true,
        "emailThreadId": true,
        "potentialContacts": {
          "id": true,
          "name": true
        },
        "direction": true,
        "messagesCount": true,
        "mostRecentMessage": {
          "id": true,
          "message": true,
          "direction": true,
          "status": true,
          "createdAt": true,
          "author": {
            "kind": true,
            "id": true,
            "name": true
          }
        },
        "replySentiment": true,
        "status": true,
        "durationSeconds": true,
        "summary": true,
        "hasRecording": true,
        "groupCount": true,
        "groupedCallIds": true,
        "author": {
          "kind": true,
          "id": true,
          "name": true
        },
        "user": {
          "id": true,
          "firstName": true,
          "lastName": true
        },
        "subject": true,
        "snippet": true,
        "fromEmail": true,
        "fromName": true,
        "toEmails": true,
        "isRead": true
      },
      "nextCallCursor": {
        "date": true,
        "id": true
      },
      "nextSmsCursor": {
        "date": true,
        "id": true
      },
      "nextEmailCursor": {
        "date": true,
        "id": true
      }
    }
  }
}
```
