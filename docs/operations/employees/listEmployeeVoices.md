<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listEmployeeVoices

query · domain `employees` · requires the READ scope

The voices an AI employee can speak in on calls, the same list its page's voice picker shows first: `voiceId`, `name`, and `gender`, `accent`, `age` and `description` to match what the person asked for ("a natural woman's voice", "an American accent"). To change the voice, updateEmployeeConfig with `configPatch` `{ channels: { callConfig: { voice: { voiceId } } } }` and one of these ids; the voice's name follows the id. `previewUrl` is a sample the person can play. Only an employee that answers or places calls has a voice (`channels.callConfig` in getEmployee's `configDocument`, whose `voice` is the current one).

## Call

```ts
const result = await client.employees.listEmployeeVoices()
// → Promise<ListEmployeeVoicesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListEmployeeVoicesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesQuery": {
    "recommendedVoices": {
      "voiceId": true,
      "name": true,
      "gender": true,
      "accent": true,
      "age": true,
      "description": true,
      "previewUrl": true
    }
  }
}
```
