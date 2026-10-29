<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getEmailThread

query · domain `conversations` · requires the READ scope

Every message in one email thread, with full plain-text bodies, OLDEST FIRST (ordered by internalDate ascending) — so the latest reply is the LAST element, not the first. Pass the `emailThreadId` from an EMAIL row in listInboxThreads. Each message carries subject, snippet, textExtract, fromEmail/fromName, toEmails, ccEmails, internalDate, direction, isRead, attachment file NAMES, and the campaign name when a workflow sent it. Read textExtract, not snippet, whenever the question is whether something appears in the thread: snippet stops after a line or two. textExtract is NULL on the HTML-only share of emails — for those the body is not readable through this API at all: never conclude their content is absent; say which you could not read. UNPAGINATED: one response holds every message. SCOPE: email is USER-owned, which is NARROWER than the org — a thread in a teammate's UNSHARED mailbox returns an EMPTY LIST even for a team admin, and even for a key owner holding VIEW_TEAM_CALLS_TEXTS or VIEW_ALL_PHONES (which widen phones and calls, not mailboxes). One exception: when the thread is one of several mailboxes' threads of ONE conversation, the response is that whole conversation — your own copies from any of its threads, plus copies held by mailboxes shared with your organization, with a each email returned once: a second stored copy of an email already in the response (a teammate's, or one in another of your mailboxes) is left out. So the same conversation comes back whole from EACH of its threads: dedupe by message id when reading several EMAIL rows. An empty list means "nothing here you may read" and collapses three cases on purpose — no such thread, not your mailbox, nothing left in it. It is never an error. Attachment BYTES are not downloadable through this API; only the file names are returned.

## Call

```ts
const result = await client.conversations.getEmailThread({ threadId: '<id>' })
// → Promise<GetEmailThreadQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetEmailThreadQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `threadId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "inboxQuery": {
    "getEmailThreadMessages": {
      "id": true,
      "threadId": true,
      "subject": true,
      "snippet": true,
      "textExtract": true,
      "fromEmail": true,
      "fromName": true,
      "toEmails": true,
      "ccEmails": true,
      "internalDate": true,
      "direction": true,
      "isRead": true,
      "attachments": {
        "id": true,
        "fileName": true
      },
      "workflowAutomationName": true
    }
  }
}
```
