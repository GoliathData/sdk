<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createEmployeeAnswerWorkflow

mutation · domain `employees` · requires the WRITE scope

Create the DRAFT workflow that hands an employee its contacts' inbound texts (on its lines, else the org's) or emails (its mailboxes, else any). Nothing runs until it is published (promoteWorkflowDraft). One that already starts the employee comes back instead.

## Call

```ts
const result = await client.employees.createEmployeeAnswerWorkflow({ employeeId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateEmployeeAnswerWorkflowMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateEmployeeAnswerWorkflowMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `employeeId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "createEmployeeAnswerWorkflow": {
      "workflowGroupId": true,
      "workflowAutomationId": true,
      "created": true
    }
  }
}
```
