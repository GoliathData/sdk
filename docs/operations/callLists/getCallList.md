<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getCallList

query · domain `callLists` · requires the READ scope

One call list with its progress, plus one page of its contacts in dial order: each slot's `position`, `status` (PENDING = still to call, IN_PROGRESS = being dialed, COMPLETED, SKIPPED with `skipReason`), the outcome (`disposition`), numbers tried and the contact. `limit` defaults to 50 (max 200); pass the returned `nextFromPosition` as `fromPosition` for the next page, and `statuses` to see only some slots. A list that is gone, or private to someone else, is refused with an error (NOT_FOUND or FORBIDDEN), not returned empty.

## Call

```ts
const result = await client.callLists.getCallList({ callListId: '<id>' })
// → Promise<GetCallListQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetCallListQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `callListId` | `ID!` | yes | — |
| `fromPosition` | `Int` | no | — |
| `limit` | `Int` | no | 50 |
| `statuses` | `[String!]` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "callListsQuery": {
    "callList": {
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
    },
    "callListItems": {
      "items": {
        "id": true,
        "position": true,
        "status": true,
        "skipReason": true,
        "disposition": true,
        "phonesTried": true,
        "completedAt": true,
        "contact": {
          "id": true,
          "name": true
        }
      },
      "total": true,
      "nextFromPosition": true
    }
  }
}
```
