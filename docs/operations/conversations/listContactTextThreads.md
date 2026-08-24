<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listContactTextThreads

query · domain `conversations` · requires the READ scope

Every text thread ONE contact has, across the org lines the key owner may see. A slim index — ids and phone numbers, NO message bodies: each entry is { id (the conversationId), contactE164PhoneNumber, twilioPhoneNumberId, twilioPhoneNumberE164 (the line that carries it) }. Its job is to disambiguate before you read: a contact texted on two different lines has two threads, and getTextThreadMessages needs to be told which. Unpaginated — a contact has a handful of threads, not a feed. An EMPTY LIST means this contact has no text threads on any line you can see, which is a real answer about the contact. It is NOT how a foreign contact reads: a contactId outside your organization is REFUSED (403 forbidden), never answered with an empty list, so you can always tell "no texts" from "not your contact". Bodies come from getTextThreadMessages, or from listContactActivities with activityTypes: [TEXT] when you want texts inline with the rest of the timeline.

## Call

```ts
const result = await client.conversations.listContactTextThreads({ contactId: '<id>' })
// → Promise<ListContactTextThreadsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListContactTextThreadsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |
| `userId` | `ID` | no | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "inboxQuery": {
    "getContactTextThreads": {
      "id": true,
      "contactE164PhoneNumber": true,
      "twilioPhoneNumberId": true,
      "twilioPhoneNumberE164": true
    }
  }
}
```
