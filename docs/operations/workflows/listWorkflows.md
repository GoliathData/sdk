<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listWorkflows

query · domain `workflows` · requires the READ scope

List the organization's workflow automations (paginated, non-archived by default). Returns the group id to use in getWorkflow and the other workflow operations.

## Call

```ts
const result = await client.workflows.listWorkflows()
// → Promise<ListWorkflowsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListWorkflowsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `limit` | `Int` | no | 20 |
| `offset` | `Int` | no | 0 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "workflowGroupsPage": {
      "items": {
        "id": true,
        "name": true,
        "description": true,
        "status": true,
        "workflowType": true,
        "workflowDomain": true,
        "systemCategory": true,
        "folderId": true,
        "createdAt": true,
        "updatedAt": true,
        "archivedAt": true
      },
      "total": true
    }
  }
}
```
