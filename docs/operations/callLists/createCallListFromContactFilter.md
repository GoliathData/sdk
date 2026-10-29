<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createCallListFromContactFilter

mutation · domain `callLists` · requires the WRITE scope

Build a call list from a saved CONTACT filter (`filterId` from listContactFilters): the contacts it matches for you right now, in the filter's order, up to 10,000. The list is a snapshot; it does not follow later changes to the filter. Before the yes, count it with countContacts on a new AND root holding the filter's own tree (the root getFilter returns) and {id: "dnc", fieldId: "doNotContact", value: false} (without that condition when the person asked to override do-not-contact), and say do-not-contact people are left off. Optional build rules, frozen onto the list: maxNumbersPerContact (default 3), includeRelatives (default false), overrideDnc and overrideLitigator (default false; turning either on dials people who asked not to be called or are a litigation risk, so ask the person first), reachedTagId (a contact tag applied to everyone the run reaches). visibilityScope is USER (only you, the default) or ORG (your whole team). Pass buildAttemptKey (any unique string) and resend it unchanged on a retry so a lost response never builds a second list. A list nobody in the org can dial from (no calling line) is refused. Contacts the list cannot call (no number, do-not-contact, litigator) are left off and counted in cannotCallCount; truncatedCount counts contacts past the 10,000 cap. Returns the new list with its dialPath.

## Call

```ts
const result = await client.callLists.createCallListFromContactFilter({ filterId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateCallListFromContactFilterMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateCallListFromContactFilterMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `filterId` | `ID!` | yes | — |
| `name` | `String` | no | — |
| `visibilityScope` | `String` | no | "USER" |
| `maxNumbersPerContact` | `Int` | no | — |
| `includeRelatives` | `Boolean` | no | — |
| `overrideDnc` | `Boolean` | no | — |
| `overrideLitigator` | `Boolean` | no | — |
| `reachedTagId` | `ID` | no | — |
| `buildAttemptKey` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "callListsMutation": {
    "createCallListFromContactFilter": {
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
