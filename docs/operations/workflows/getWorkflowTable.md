<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getWorkflowTable

query · domain `workflows` · requires the READ scope

One Workflow Table with its rows, paged by `rowLimit` (default 100, at most 500) and `rowOffset` — keep reading while a page comes back full (`rowCount` excludes the DEFAULT row, which pages like any other): each row's key (`key`, `keyLabel`, the `keyLevel` of the fallback chain it sits on, and its `keyParts`), whether it is the DEFAULT row (used when nothing matches), and its cells by `columnId`. Rows need an org admin (the Tables editor's gate); null when the table is not in your org. Which row one record gets is previewWorkflowTableLookup's answer, never a key matched by eye.

## Call

```ts
const result = await client.workflows.getWorkflowTable({ workflowTableId: '<id>', rowLimit: 0 })
// → Promise<GetWorkflowTableQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetWorkflowTableQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowTableId` | `ID!` | yes | — |
| `rowLimit` | `Int!` | yes | 100 |
| `rowOffset` | `Int` | no | 0 |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "workflowTable": {
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
      },
      "rows": {
        "id": true,
        "key": true,
        "keyLabel": true,
        "keyLevel": true,
        "keyParts": {
          "match": true,
          "value": true,
          "label": true,
          "rangeStart": true,
          "rangeEnd": true
        },
        "isDefault": true,
        "displayOrder": true,
        "cells": {
          "columnId": true,
          "value": true
        }
      }
    }
  }
}
```
