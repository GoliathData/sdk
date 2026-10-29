<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteWorkflowTable

mutation · domain `workflows` · requires the WRITE scope

Archive a Workflow Table. Refused while a workflow, message or form still names one of its columns; the refusal names them.

## Call

```ts
const result = await client.workflows.deleteWorkflowTable({ input: <DeleteWorkflowTableInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteWorkflowTableMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteWorkflowTableMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `DeleteWorkflowTableInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "deleteWorkflowTable": {
      "id": true
    }
  }
}
```
