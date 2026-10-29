<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listInboxThreads

query · domain `conversations` · requires the READ scope

The inbox: text conversations, calls and email threads in ONE most-recent-first feed, the read for questions that name no contact ("did they text back", "what is unread"; listContactActivities needs a contactId). Each row carries the channel in `type` (MESSAGE | CALL | EMAIL) and only the fields that channel has: a MESSAGE row carries mostRecentMessage (with its full body) + replySentiment; a CALL row carries status/durationSeconds/summary/hasRecording and, for a grouped day of calls, groupCount + groupedCallIds; an EMAIL row carries subject/snippet/fromEmail/toEmails/direction (of its latest message) + emailThreadId. Quote `createdAtLocal`; never convert a UTC time yourself. Rows are PREVIEWS; a MESSAGE row's recentInbound holds the contact's newest texts (up to 3), which a later send hides from mostRecentMessage. To read a whole conversation, follow the id: a MESSAGE row's id is the conversationId for getTextThreadMessages, an EMAIL row's emailThreadId is the threadId for getEmailThread, and a CALL row (or an id from groupedCallIds) goes to getCallRecording. WHO THE CONTACT IS: on MESSAGE and CALL rows `potentialContacts` (`{ id, name }`) lists the contacts on that number — one entry names the contact; several mean the number is shared, so name them all or open the thread rather than picking the first; empty means none matches. `contactName` is caller-ID only, set for an unmatched inbound CALL, and is null on every text row, so a null `contactName` never means the contact is unknown. No `channel` reads all three channels in ONE call. FILTERS: `seen: false` is unread (one flag across all three channels — a text conversation's seen, a call's seen, an email's isRead); `channel` narrows to CALLS | MESSAGES | EMAILS | MISSED_CALLS | UNRESPONDED | NEEDS_RESPONSE (TEXT threads only: the contact spoke last, less ones a teammate marked handled; for email and calls read EMAILS (INBOUND `direction`: they wrote last) and MISSED_CALLS); `respondedOnly: true` keeps only threads the contact has replied on at least once; `sentBy` keeps threads with an outbound message from HUMAN, AI_EMPLOYEE and/or WORKFLOW (a campaign) — `sentBy: [WORKFLOW], respondedOnly: true` is "who replied to a campaign"; `replySentiments` keeps threads whose most recent inbound reply was classified POSITIVE | NEUTRAL | NEGATIVE | OPT_OUT | UNREACHABLE, and POSITIVE also keeps any thread that replied POSITIVE and has not opted out since; `optedOut` is INCLUDE by default (every row), EXCLUDE leaves out the opted-out text threads the app inbox hides (the contact said stop, the number is SMS-suppressed or the number's contacts are all Do Not Contact, with nothing from them since), and ONLY returns just those. WHICH FILTERS REACH CALLS: setting `respondedOnly` or `replySentiments` drops every CALL row (a call has no reply). `sentBy` DOES filter calls (AI_EMPLOYEE when the call has an AI-employee author, else HUMAN), but no call matches WORKFLOW. `searchTerm` matches message text, an email's subject and latest snippet, and participant names (a term that names a contact reads only their threads); a short page with a cursor left means ask again. `starredOnly: true` keeps only starred rows of any channel (each has isStarred; a MESSAGE row also isNeedsReplyHandled when a teammate marked it handled). PAGING is keyset per channel: pass nextCallCursor/nextSmsCursor/nextEmailCursor back as callCursor/smsCursor/emailCursor, ALL THREE exactly as received (a null one as null: alone it is no finished channel); dropping a non-null cursor restarts that channel and repeats rows. THE FEED IS DONE only when ALL THREE come back null: never stop on an empty page while one remains. limit is per page across the merged feed (default 25, max 50). SCOPE: with no `userIds` this is the KEY OWNER'S OWN inbox (their lines and mailbox, as the app shows them). Naming a teammate in `userIds` reads their inbox only if the key owner holds VIEW_TEAM_CALLS_TEXTS or VIEW_ALL_PHONES (a teammate's email only from a mailbox they share); without either the request is REFUSED (an error), which is different from an empty page. An EMPTY list means nothing in your own inbox matched, never that the org has no messages. Teammate ids come from listTeammates.

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
| `optedOut` | `InboxOptedOutScope` | no | INCLUDE |
| `searchTerm` | `String` | no | — |
| `userIds` | `[ID!]` | no | — |
| `starredOnly` | `Boolean` | no | — |
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
        "createdAtLocal": true,
        "seen": true,
        "contactName": true,
        "contactE164PhoneNumber": true,
        "phoneLineId": true,
        "emailThreadId": true,
        "potentialContacts": {
          "id": true,
          "name": true
        },
        "direction": true,
        "mostRecentMessage": {
          "id": true,
          "message": true,
          "direction": true,
          "status": true,
          "createdAt": true,
          "createdAtLocal": true,
          "author": {
            "kind": true,
            "id": true,
            "name": true
          }
        },
        "recentInbound": {
          "body": true,
          "at": true,
          "atLocal": true
        },
        "replySentiment": true,
        "isStarred": true,
        "isNeedsReplyHandled": true,
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
