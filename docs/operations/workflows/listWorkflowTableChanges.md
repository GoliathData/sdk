<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listWorkflowTableChanges

query · domain `workflows` · requires the READ scope

A Workflow Table's change history, newest first: who saved what and when, how many columns and rows changed. `rowId` narrows it to one row. Page with `after` = `nextCursor`. Same gate as the rows.

## Call

```ts
const result = await client.workflows.listWorkflowTableChanges({ workflowTableId: '<id>' })
// → Promise<ListWorkflowTableChangesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListWorkflowTableChangesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowTableId` | `ID!` | yes | — |
| `rowId` | `ID` | no | — |
| `limit` | `Int` | no | 25 |
| `after` | `String` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 100.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "workflowTableChanges": {
      "items": {
        "id": true,
        "action": true,
        "createdAt": true,
        "actorName": true,
        "tableName": true,
        "columnsChanged": true,
        "rowsChanged": true,
        "truncated": true
      },
      "nextCursor": true
    }
  }
}
```
