<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getCallListDialLink

query · domain `callLists` · requires the READ scope

The in-app link that opens a call list in the dialer, where a person presses Start: `dialPath` is a path inside the app (`/contacts?callListId=…`). Show it to the person as a button (open_url with that path). Calls are always placed by a person in the app, never through the API. `lockedByUser` says who is dialing it right now, if anyone; an ENDED list cannot be dialed again.

## Call

```ts
const result = await client.callLists.getCallListDialLink({ callListId: '<id>' })
// → Promise<GetCallListDialLinkQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetCallListDialLinkQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `callListId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "callListsQuery": {
    "callList": {
      "id": true,
      "name": true,
      "status": true,
      "dialPath": true,
      "lockedByUser": {
        "id": true,
        "firstName": true,
        "lastName": true
      },
      "counts": {
        "total": true,
        "pending": true
      }
    }
  }
}
```
