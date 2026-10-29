<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# saveWorkflowTableRows

mutation · domain `workflows` · requires the WRITE scope

Create or replace rows (`rows` — a row is replaced WHOLE, never merged) and delete rows (`deleteRowIds`) of one table in a single write; a deleted row or a replaced cell is gone for good, so this needs the person's approval. Pass `expectedUpdatedAt` = the table's `updatedAt` from getWorkflowTable so a save over someone else's newer edit is refused (CONFLICT) instead of overwriting it. Returns the table's shape and `rowCount`; read rows back with getWorkflowTable.

## Call

```ts
const result = await client.workflows.saveWorkflowTableRows({ input: <SaveWorkflowTableRowsInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SaveWorkflowTableRowsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SaveWorkflowTableRowsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `SaveWorkflowTableRowsInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "saveWorkflowTableRows": {
      "id": true,
      "name": true,
      "description": true,
      "keyKind": true,
      "keyFieldPath": true,
      "keyShape": {
        "levels": {
          "parts": {
            "kind": true,
            "fieldPath": true,
            "match": true
          }
        }
      },
      "rowCount": true,
      "isProvisioned": true,
      "updatedAt": true,
      "columns": {
        "id": true,
        "name": true,
        "kind": true,
        "displayOrder": true,
        "tokenKey": true,
        "options": {
          "value": true,
          "label": true
        }
      }
    }
  }
}
```
