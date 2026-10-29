<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listCommunicationChannels

query · domain `communications` · requires the READ scope

What can I send from? All the organization's phone lines (each with its user and canSendSms) and your mailboxes; your lines have user.id = currentUser.id. "My number" to text from or give a teammate is one of these, not getMyProfile.phoneNumber. canSendSms is line setup only: while organization.textingReadiness.canText is false nothing texts, so never say a line can text; say what its reason value says to do. myDisconnectedMailboxes lost connection (disconnectedAt): say disconnected, reconnect; never no mailbox.

## Call

```ts
const result = await client.communications.listCommunicationChannels()
// → Promise<ListCommunicationChannelsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListCommunicationChannelsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "currentUser": {
    "id": true,
    "organization": {
      "id": true,
      "textingReadiness": {
        "canText": true,
        "reason": true
      },
      "twilioPhoneNumbers": {
        "id": true,
        "e164Number": true,
        "isPrimary": true,
        "canSendSms": true,
        "user": {
          "id": true
        }
      }
    }
  },
  "oauthQuery": {
    "myActiveEmailIdentities": {
      "id": true,
      "email": true,
      "provider": true,
      "clientId": true
    },
    "myDisconnectedMailboxes": {
      "email": true,
      "provider": true,
      "disconnectedAt": true
    }
  }
}
```
