<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createCallList

mutation · domain `callLists` · requires the WRITE scope

Build a call list from contact ids, dialed in the order given (duplicates collapse). Every contact must be one you can open, or the whole build is refused. Collect the ids with filterContacts, ANDing in the condition {id: "dnc", fieldId: "doNotContact", value: false} (an OR root goes under a new AND root beside it; leave it out only when the person asked to override do-not-contact), so the count on your yes card leaves them out; a result cut short hides some rows’ flags, so never say none are do-not-contact from one. Optional build rules, frozen onto the list: maxNumbersPerContact (default 3), includeRelatives (default false), overrideDnc and overrideLitigator (default false; turning either on dials people who asked not to be called or are a litigation risk, so ask the person first), reachedTagId (a contact tag applied to everyone the run reaches). visibilityScope is USER (only you, the default) or ORG (your whole team). Pass buildAttemptKey (any unique string) and resend it unchanged on a retry so a lost response never builds a second list. A list nobody in the org can dial from (no calling line) is refused. Contacts the list cannot call (no number, do-not-contact, litigator) are left off and counted in cannotCallCount; truncatedCount counts contacts past the 10,000 cap. Returns the new list with its dialPath.

## Call

```ts
const result = await client.callLists.createCallList({ contactIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateCallListMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateCallListMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `name` | `String` | no | — |
| `contactIds` | `[ID!]!` | yes | — |
| `visibilityScope` | `String` | no | "USER" |
| `maxNumbersPerContact` | `Int` | no | — |
| `includeRelatives` | `Boolean` | no | — |
| `overrideDnc` | `Boolean` | no | — |
| `overrideLitigator` | `Boolean` | no | — |
| `reachedTagId` | `ID` | no | — |
| `buildAttemptKey` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "callListsMutation": {
    "createCallList": {
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
      "truncatedCount": true,
      "cannotCallCount": true
    }
  }
}
```
