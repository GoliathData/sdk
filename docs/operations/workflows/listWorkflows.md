<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listWorkflows

query · domain `workflows` · requires the READ scope

List the organization's workflow automations (paginated, non-archived by default). Returns the group id to use in getWorkflow and the other workflow operations. `status`, `domain`, `name` (a name search, any case) and `triggerType` (on a version of that status; hidden groups included) narrow rows and `total`. For a workflow the person named, pass their words as `name` and compare each row's `name` for the exact one, reading every page `total` counts before calling one row the only exact match (names are not unique). Each row carries `channelsAcrossVersions`: the channels the workflow messages on (TEXT, EMAIL, both, or [] when it messages nobody; never null), the same answer the app's Channel filter gives, so read it to PICK workflows out of a list. It spans EVERY version not deleted: the published one, the ones it superseded and an unpublished draft. getWorkflow.`channels` reads ONE: the most recently PUBLISHED version whatever its status (active, paused or suspended), else the pending draft. NEITHER says it is SENDING: a paused or suspended head keeps its configured channels while sending nothing. Read `status` for that.

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
| `status` | `WorkflowGroupStatus` | no | — |
| `domain` | `WorkflowDomain` | no | — |
| `name` | `String` | no | — |
| `triggerType` | `[WorkflowTriggerType!]` | no | — |

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
        "channelsAcrossVersions": true,
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
