<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# saveWorkflowTable

mutation · domain `workflows` · requires the WRITE scope

Create a Workflow Table (`workflowTableId` omitted) or replace an existing one's name, description and columns. The key (`keyKind`, `keyFieldPath`) is fixed at creation; fallback levels may be added later. A column left out of an update is DELETED, with its value in every row — permanent, so this needs the person's approval. Rows are written with saveWorkflowTableRows. Returns the table's shape.

## Call

```ts
const result = await client.workflows.saveWorkflowTable({ input: <SaveWorkflowTableInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SaveWorkflowTableMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SaveWorkflowTableMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `SaveWorkflowTableInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "saveWorkflowTable": {
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
