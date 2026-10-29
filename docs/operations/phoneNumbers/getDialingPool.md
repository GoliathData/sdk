<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getDialingPool

query · domain `phoneNumbers` · requires the READ scope

The org's bulk-dialing rotation: each line (id, number, label), its calls today against its daily limit and restUntil, and the day's room.

## Call

```ts
const result = await client.phoneNumbers.getDialingPool()
// → Promise<GetDialingPoolQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetDialingPoolQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dialingPoolQuery": {
    "poolView": {
      "lines": {
        "id": true,
        "e164Number": true,
        "label": true,
        "isDialingPoolLine": true,
        "dialing": {
          "callsToday": true,
          "dailyLimit": true,
          "restUntil": true
        }
      },
      "room": {
        "roomToday": true,
        "linesInRotation": true,
        "linesResting": true
      }
    }
  }
}
```
