<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addCallListContacts

mutation · domain `callLists` · requires the WRITE scope

Add contacts to the end of a call list, so they are called after everyone already on it. Needs you to have built the list or be an admin. Contacts already on the list, including ones removed earlier (`alreadyOnListCount`), ones its own rules cannot call (`cannotCallCount`) and ones past the 10,000 cap (`truncatedCount`) are left off and counted. At most 10,000 ids per call. Refused on an ENDED list.

## Call

```ts
const result = await client.callLists.addCallListContacts({ callListId: '<id>', contactIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddCallListContactsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddCallListContactsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `callListId` | `ID!` | yes | — |
| `contactIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "callListsMutation": {
    "addCallListContacts": {
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
      "addedCount": true,
      "alreadyOnListCount": true,
      "cannotCallCount": true,
      "truncatedCount": true
    }
  }
}
```
