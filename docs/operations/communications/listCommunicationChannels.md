<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listCommunicationChannels

query · domain `communications` · requires the READ scope

What can I send from? Returns ALL the organization's phone lines (each with its assigned user and canSendSms) and the connected mailboxes for the calling user. Your own lines are those whose user.id equals currentUser.id. canSendSms is a provisioning heuristic: false means the line is not provisioned for SMS sending; true means provisioned, but a send can still be rejected at send time. Outbound sending itself happens in the app — the API does not offer send operations.

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
    }
  }
}
```
