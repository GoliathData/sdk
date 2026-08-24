<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getEmailThread

query · domain `conversations` · requires the READ scope

Every message in one email thread, with full plain-text bodies, OLDEST FIRST (ordered by internalDate ascending) — so the latest reply is the LAST element, not the first. Pass the `emailThreadId` from an EMAIL row in listInboxThreads. Each message carries subject, snippet, textExtract, fromEmail/fromName, toEmails, ccEmails, internalDate, direction, isRead, attachment file NAMES, and the campaign name when a workflow sent it. Read textExtract, not snippet, whenever the question is whether something appears in the thread: snippet stops after a line or two. textExtract is NULL on the HTML-only share of emails — for those the body is not readable through this API at all, so say which messages you could not read and point the user at the thread in the app rather than concluding the content is absent. UNPAGINATED: the whole thread comes back in one response, because the read behind it takes no page window — a very long thread is a large response, not a truncated one. SCOPE: email is USER-owned, which is NARROWER than the org — a thread in a teammate's mailbox returns an EMPTY LIST even for a team admin, and even for a key owner holding VIEW_ALL_PHONES (which widens phones and calls, not mailboxes). An empty list therefore means "no messages in this thread that you own" and collapses three cases on purpose — no such thread, not your mailbox, nothing left in it. It is never an error. Attachment BYTES are not downloadable through this API; only the file names are returned.

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
