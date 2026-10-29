<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listWorkflowGraphRevisions

query · domain `workflows` · requires the READ scope

A workflow's save history, newest first: when, who (`source` HUMAN, AGENT or SYSTEM; `actorName`; `agentRunId` for an agent's save), the version it wrote, and `diff`: what changed against the save before (`summary`, edited steps and keys, settings, rename). A save through this API, the assistant's included, reads HUMAN under the person's name. When `diff.hasPredecessor` is false there is no earlier save to compare (its first save, or older history trimmed): go by `summary`, never the lists, as that save's change. `absorbedUnjournaledEdits` means it includes edits made outside the editor; say so.

## Call

```ts
const result = await client.workflows.listWorkflowGraphRevisions({ workflowGroupId: '<id>' })
// → Promise<ListWorkflowGraphRevisionsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListWorkflowGraphRevisionsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |
| `limit` | `Int` | no | 25 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 100.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "listWorkflowGraphRevisions": {
      "id": true,
      "versionId": true,
      "source": true,
      "actorName": true,
      "agentRunId": true,
      "createdAt": true,
      "diff": {
        "summary": true,
        "hasPredecessor": true,
        "absorbedUnjournaledEdits": true,
        "editedSteps": {
          "type": true,
          "changedConfigKeys": true
        },
        "changedSettingKeys": true,
        "renamedFrom": true,
        "renamedTo": true
      }
    }
  }
}
```
