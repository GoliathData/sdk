<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listSpaceContactFiles

query · domain `spaces` · requires the READ scope

Records › Contact files: attachments and voicemails contacts sent or received, newest first. Filter by `contactId`, `dealId` (any contact on the deal), `channel`, `direction`, or `query` (the file's or the contact's name). Only files whose contact you may open. Each row's `source` says where it came from (a text thread, an email subject, a call). Page with `after` = `nextCursor`.

## Call

```ts
const result = await client.spaces.listSpaceContactFiles()
// → Promise<ListSpaceContactFilesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListSpaceContactFilesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `filter` | `SpacesContactFilesFilter` | no | — |
| `limit` | `Int` | no | 50 |
| `after` | `String` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesQuery": {
    "records": {
      "contactFiles": {
        "nodes": {
          "id": true,
          "name": true,
          "contentType": true,
          "createdAt": true,
          "contact": {
            "id": true,
            "name": true
          },
          "source": {
            "channel": true,
            "direction": true,
            "textConversationId": true,
            "phoneNumber": true,
            "emailSubject": true,
            "callId": true
          }
        },
        "hasNextPage": true,
        "nextCursor": true
      }
    }
  }
}
```
