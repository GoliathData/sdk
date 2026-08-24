<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getTextThreadMessages

query · domain `conversations` · requires the READ scope

The messages of ONE text conversation, with full bodies, newest first by default. Use it to read what was actually said after listInboxThreads surfaced a MESSAGE row — the row carries only the most recent message. Identify the thread by `contactPhoneNumber` (required, E.164 e.g. +13235550100 — take it from the row's contactE164PhoneNumber) and, when you have it, `conversationId` (the MESSAGE row's id), which resolves the thread exactly. Without a conversationId a contact reachable on several org lines resolves to one of them arbitrarily; pass `twilioPhoneNumberId` to pin the line instead. Page with limit/offset (default 50, max 100) — a full page means more may remain, so advance offset until a short page arrives. Each message carries message (the body), direction, status, createdAt, from/toPhoneNumber, errorCode/errorMessage when a send failed, and `author` — who sent it, a person or an AI employee. `author` is null on every INBOUND message by design: the words are the contact's, and the line's assigned holder is not their author. Returns an EMPTY LIST, never an error, when no conversation on that number is visible to the key owner — and "no such conversation" and "that conversation is a teammate's, and you do not hold VIEW_ALL_PHONES" are deliberately indistinguishable, so an empty result is not proof the contact never texted. When you have a contactId, listContactTextThreads first tells you which lines that contact has threads on. MMS media is not returned by this API; the message body is.

## Call

```ts
const result = await client.conversations.getTextThreadMessages({ contactPhoneNumber: '<text>' })
// → Promise<GetTextThreadMessagesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetTextThreadMessagesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactPhoneNumber` | `String!` | yes | — |
| `conversationId` | `ID` | no | — |
| `twilioPhoneNumberId` | `ID` | no | — |
| `userId` | `ID` | no | — |
| `limit` | `Int` | no | 50 |
| `offset` | `Int` | no | 0 |
| `sort` | `SortDirection` | no | DESC |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 100.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "inboxQuery": {
    "getInboxMessages": {
      "id": true,
      "contactE164PhoneNumber": true,
      "twilioPhoneNumberId": true,
      "seen": true,
      "potentialContacts": {
        "id": true,
        "name": true
      },
      "messages": {
        "id": true,
        "message": true,
        "direction": true,
        "status": true,
        "createdAt": true,
        "fromPhoneNumber": true,
        "toPhoneNumber": true,
        "errorCode": true,
        "errorMessage": true,
        "author": {
          "kind": true,
          "id": true,
          "name": true
        },
        "workflowAutomationName": true,
        "agentName": true
      }
    }
  }
}
```
