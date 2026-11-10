<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listEmployeeVoices

query · domain `employees` · requires the READ scope

The voices an AI employee can speak in on calls: `voiceId`, `name`, and `gender`, `accent`, `age` and `description` to match what the person asked for ("a natural woman's voice", "an American accent"). With no `search`, the recommended list its page's voice picker shows first. With `search` (a name or words like "deep" or "british"; `gender` and `accent` narrow it), the matching voices in our voice workspace (`source` ACCOUNT) and then the shared voice library (`source` COMMUNITY), the same search the picker runs. To change the voice, updateEmployeeConfig with `configPatch` `{ channels: { callConfig: { voice: { voiceId } } } }` and one of these ids; the voice's name, gender, accent and sample follow the id, and a library voice is added to the workspace when it is saved. `previewUrl` is a sample the person can play. Only an employee that answers or places calls has a voice (`channels.callConfig` in getEmployee's `configDocument`, whose `voice` is the current one).

## Call

```ts
const result = await client.employees.listEmployeeVoices()
// → Promise<ListEmployeeVoicesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListEmployeeVoicesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `search` | `String` | no | — |
| `gender` | `String` | no | — |
| `accent` | `String` | no | — |

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
      "previewUrl": true,
      "source": true
    }
  }
}
```
