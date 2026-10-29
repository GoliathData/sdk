<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listSpaceCalls

query · domain `spaces` · requires the READ scope

Records › Calls: the organization's calls, newest first — direction, when, how long, whether recorded, the contact, status and disposition. Filter by `direction`, `contactId`, `handledBy` (`{ userId }` or `{ agentId }`) or `query` (the contact's name; transcripts are not searched). Read one call's recording, transcript and summary with the conversations domain's getCallRecording(callId). Page with `after` = `nextCursor`.

## Call

```ts
const result = await client.spaces.listSpaceCalls()
// → Promise<ListSpaceCallsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListSpaceCallsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `filter` | `SpacesCallsFilter` | no | — |
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
      "calls": {
        "nodes": {
          "id": true,
          "direction": true,
          "startedAt": true,
          "durationSeconds": true,
          "hasRecording": true,
          "contact": {
            "id": true,
            "name": true
          },
          "call": {
            "id": true,
            "status": true,
            "disposition": true
          }
        },
        "hasNextPage": true,
        "nextCursor": true
      }
    }
  }
}
```
