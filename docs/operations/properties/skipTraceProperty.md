<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# skipTraceProperty

mutation · domain `properties` · requires the ADMIN scope

Skip-trace a property (by id/esId) to discover its owner and their phone numbers/emails. Returns the discovered people inline; re-read them later (free) with getPropertyOwners. CONSUMES ONE SKIPTRACE CREDIT (real money) — requires the ADMIN scope, and the key owner must be a team admin.

## Call

```ts
const result = await client.properties.skipTraceProperty({ propertyId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SkipTracePropertyMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SkipTracePropertyMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `propertyId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "skiptraceMutation": {
    "skipTraceProperty": {
      "id": true,
      "skipTraceStatus": true,
      "lastSkiptracedAt": true,
      "isStaleSkiptrace": true,
      "address": {
        "addressFull": true
      },
      "people": {
        "id": true,
        "firstName": true,
        "middleName": true,
        "lastName": true,
        "suffix": true,
        "age": true,
        "phoneNumbers": {
          "number": true,
          "type": true,
          "ranking": true,
          "dncStatus": {
            "isDnc": true,
            "isLitigator": true
          }
        },
        "emails": {
          "email": true,
          "ranking": true
        },
        "isRelative": true,
        "relativeIds": true,
        "ranking": true,
        "deceased": true,
        "isNameOnDeed": true
      }
    }
  }
}
```
