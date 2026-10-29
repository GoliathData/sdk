<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getWorkflowIntakeAssignment

query · domain `account` · requires the READ scope

One EVENT workflow's intake assignment (who owns a contact its find/create step creates); assignmentPolicy null when it has none, workflowGroup null when the id is not one of the org's workflows.

## Call

```ts
const result = await client.account.getWorkflowIntakeAssignment({ workflowGroupId: '<id>' })
// → Promise<GetWorkflowIntakeAssignmentQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetWorkflowIntakeAssignmentQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "workflowGroup": {
      "id": true,
      "name": true,
      "workflowDomain": true,
      "assignmentPolicy": {
        "id": true,
        "assigneeUserIds": true,
        "participantUserIds": true,
        "teamIds": true,
        "tags": true,
        "agentAssigneeIds": true,
        "workflowGroupIds": true
      }
    }
  }
}
```
