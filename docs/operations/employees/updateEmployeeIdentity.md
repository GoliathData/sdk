<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateEmployeeIdentity

mutation · domain `employees` · requires the WRITE scope

Rename an AI employee or change its job title or avatar, nothing else (an omitted field is kept; an empty `title` clears it). A rename is carried into its instructions, as on its page. Pass `expectedUpdatedAt`. On an employee that is switched on it takes effect on its next run: needs their yes; a card’s counts.

## Call

```ts
const result = await client.employees.updateEmployeeIdentity({ employeeId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateEmployeeIdentityMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateEmployeeIdentityMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `employeeId` | `ID!` | yes | — |
| `name` | `String` | no | — |
| `title` | `String` | no | — |
| `avatar` | `String` | no | — |
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
      "avatar": true,
      "status": true,
      "updatedAt": true
    }
  }
}
```
