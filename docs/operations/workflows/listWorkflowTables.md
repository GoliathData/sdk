<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listWorkflowTables

query · domain `workflows` · requires the READ scope

The organization's Workflow Tables (not archived), by name: each table's key (what rows are matched on — `keyKind`, e.g. COUNTY_FIPS, STATE, ZIP, FIELD_PATH, and its fallback levels in `keyShape`), its columns (with each column's `tokenKey`, the merge field a message uses, and a SELECT column's options) and `rowCount`. No rows — read one table's rows with getWorkflowTable. Paged: `limit` (default 20) and `offset`; a page shorter than `limit` is the last.

## Call

```ts
const result = await client.workflows.listWorkflowTables()
// → Promise<ListWorkflowTablesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListWorkflowTablesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `limit` | `Int` | no | 20 |
| `offset` | `Int` | no | 0 |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "workflowTables": {
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
