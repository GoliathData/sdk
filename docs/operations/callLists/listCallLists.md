<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listCallLists

query · domain `callLists` · requires the READ scope

The call lists you can open: your own and the ones shared with your team, newest first (at most 50). Narrow with `status` (ACTIVE, PAUSED, ENDED) and with `mine` / `orgVisible` (set either and the pair is exact). Each list has its progress (`counts`: total, pending, completed, skipped, dials placed and outcomes), its frozen build rules, who built it, who is dialing it right now (`lockedByUser`, null when free) and `dialPath`, the in-app path that opens it in the dialer.

## Call

```ts
const result = await client.callLists.listCallLists()
// → Promise<ListCallListsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListCallListsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `status` | `[String!]` | no | — |
| `mine` | `Boolean` | no | — |
| `orgVisible` | `Boolean` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "callListsQuery": {
    "callLists": {
      "items": {
        "id": true,
        "name": true,
        "status": true,
        "visibilityScope": true,
        "maxNumbersPerContact": true,
        "includeRelatives": true,
        "overrideDnc": true,
        "overrideLitigator": true,
        "cursorPosition": true,
        "startedAt": true,
        "endedAt": true,
        "dialPath": true,
        "createdByUser": {
          "id": true,
          "firstName": true,
          "lastName": true
        },
        "lockedByUser": {
          "id": true,
          "firstName": true,
          "lastName": true
        },
        "reachedTag": {
          "id": true,
          "name": true
        },
        "counts": {
          "total": true,
          "pending": true,
          "completed": true,
          "skipped": true,
          "dials": true,
          "byDisposition": {
            "disposition": true,
            "count": true
          }
        }
      }
    }
  }
}
```
