<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createEmployee

mutation · domain `employees` · requires the WRITE scope

Hire an AI employee. It is ALWAYS created switched off (INACTIVE), whatever the config says: it answers nobody until it is switched on. Omit `config` for the generalist an operator gets with no template (texts, emails and calls once a phone line or mailbox is attached, notes, tasks, notifying a teammate, booking its own follow-up), then shape it with updateEmployeeConfig; or pass a COMPLETE config document in the shape getEmployee returns as `configDocument`. The same checks the employee builder runs apply, and a refusal names each field and what to change. Returns the new employee and its `configDocument`.

## Call

```ts
const result = await client.employees.createEmployee({ name: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateEmployeeMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateEmployeeMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `name` | `String!` | yes | — |
| `title` | `String` | no | — |
| `avatar` | `String` | no | — |
| `origin` | `String` | no | — |
| `config` | `JSON` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "createAiEmployee": {
      "id": true,
      "name": true,
      "title": true,
      "status": true,
      "configDocument": true,
      "updatedAt": true
    }
  }
}
```
