<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getMyDialingRoom

query · domain `phoneNumbers` · requires the READ scope

Can the key owner start a call list now? null: they have no phone line to call from (an admin assigns them a number). Else linesInRotation and linesResting of the bulk-dialing numbers their calls can go out on; none in rotation, or all resting, means a call list cannot dial.

## Call

```ts
const result = await client.phoneNumbers.getMyDialingRoom()
// → Promise<GetMyDialingRoomQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetMyDialingRoomQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dialingPoolQuery": {
    "dialableRoomForMe": {
      "linesInRotation": true,
      "linesResting": true
    }
  }
}
```
