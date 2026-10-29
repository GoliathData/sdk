<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# removeCallListContacts

mutation · domain `callLists` · requires the WRITE scope

Take contacts off a call list before they are called: their slots close as skipped by hand (`skipReason` USER), so the list keeps its record. A contact being dialed right now, already called, or up next for a rep working the list stays as it is and counts in `notRemovedCount`. A removed contact keeps its slot (and its place toward the 10,000 cap) and cannot be added back to the same list. Needs you to have built the list or be an admin. Refused on an ENDED list.

## Call

```ts
const result = await client.callLists.removeCallListContacts({ callListId: '<id>', contactIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RemoveCallListContactsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RemoveCallListContactsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `callListId` | `ID!` | yes | — |
| `contactIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "callListsMutation": {
    "removeCallListContacts": {
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
      "removedCount": true,
      "notRemovedCount": true
    }
  }
}
```
