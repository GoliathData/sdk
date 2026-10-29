<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# endCallList

mutation · domain `callLists` · requires the WRITE scope

Archive a call list: it moves to ENDED, stays readable with its outcomes, and can no longer be dialed or edited. Needs you to have built the list or be an admin. Refused with a CONFLICT while `lockedByUser` shows someone dialing it: end it once their run stops.

## Call

```ts
const result = await client.callLists.endCallList({ callListId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<EndCallListMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `EndCallListMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `callListId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "callListsMutation": {
    "endCallList": {
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
```
