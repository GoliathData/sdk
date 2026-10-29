<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# restoreEmployeeRevision

mutation · domain `employees` · requires the WRITE scope

Put an AI employee back to a saved version (`revisionId` from listEmployeeRevisions): its instructions, settings, name and job title as that version held them (the avatar is kept, and a setting that version never had keeps its current value), saved as a new version. updateEmployeeConfig's checks apply, the screening one included. Pass `expectedUpdatedAt`. On an employee that is switched on it takes effect on its next run: needs their yes; a card’s counts.

## Call

```ts
const result = await client.employees.restoreEmployeeRevision({ employeeId: '<id>', revisionId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RestoreEmployeeRevisionMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RestoreEmployeeRevisionMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `employeeId` | `ID!` | yes | — |
| `revisionId` | `ID!` | yes | — |
| `acknowledgeScreeningWeakening` | `Boolean` | no | — |
| `expectedUpdatedAt` | `DateTime` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "restoreAiEmployeeRevision": {
      "id": true,
      "name": true,
      "title": true,
      "status": true,
      "updatedAt": true
    }
  }
}
```
