<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateEmployeeConfig

mutation · domain `employees` · requires the WRITE scope

Change an AI employee's configuration. To change part of it (a sentence, its tone, an hour), send only the change: `edits` are exact `{ find, replace }` pairs, each `find` copied from `configDocument` and found exactly once across its text (instructions, call scripts), applied in order, all or nothing; `configPatch` is a JSON merge patch for settings (objects merge, anything else replaces; a list to clear is `[]`, e.g. `{ channels: { emailConfig: { sendWindow: {...} } } }`), and a whole new `prompt` goes there too. Whatever you do not name is left as it is. Send `config`, the COMPLETE document, only to rewrite everything; a write that drops text or a channel nobody edited is refused. `name`, `title` and `avatar` are kept when omitted; an empty `title` clears it. The employee builder's checks run on every call and a refusal names each field and what to change: the voice must be one the workspace can use, the instructions must fit, and no line may tell the employee to claim to be a person or deny being an AI. A change that turns off do-not-call or known-litigator screening is refused with the exact sentence to put to the person; ask them, and send the same call again with `acknowledgeScreeningWeakening: true` only if they agree. Pass `expectedUpdatedAt` (the `updatedAt` you read) so a teammate's save in between is refused rather than overwritten. A text `sendWindow` outside 8 AM to 9 PM is saved as asked; the result's `quietHoursNotice` then names the hours in words, and the reply says it once. `textHours` is the window as saved, in words. Does not switch the employee on or off.

## Call

```ts
const result = await client.employees.updateEmployeeConfig({ employeeId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateEmployeeConfigMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateEmployeeConfigMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `employeeId` | `ID!` | yes | — |
| `name` | `String` | no | — |
| `title` | `String` | no | — |
| `avatar` | `String` | no | — |
| `config` | `JSON` | no | — |
| `edits` | `[AiEmployeeConfigTextEditInput!]` | no | — |
| `configPatch` | `JSON` | no | — |
| `acknowledgeScreeningWeakening` | `Boolean` | no | — |
| `expectedUpdatedAt` | `DateTime` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "updateAiEmployeeConfig": {
      "id": true,
      "name": true,
      "title": true,
      "status": true,
      "configDocument": true,
      "textHours": true,
      "quietHoursNotice": true,
      "updatedAt": true
    }
  }
}
```
