<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# restoreWorkflowVersionAsDraft

mutation · domain `workflows` · requires the WRITE scope

Roll back: copy an OLDER version (workflowAutomationId from getWorkflow.versions) into the DRAFT, then publish it with promoteWorkflowDraft. Only a PAUSED version a later-published one superseded (compare publishedAt); the most recently published one is refused (resume it with resumeWorkflowVersion). REPLACES the current draft and its edits, so confirm first when one exists. Nothing goes live.

## Call

```ts
const result = await client.workflows.restoreWorkflowVersionAsDraft({ workflowAutomationId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RestoreWorkflowVersionAsDraftMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RestoreWorkflowVersionAsDraftMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowAutomationId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "restoreWorkflowVersionAsDraft": {
      "id": true,
      "workflowGroupId": true,
      "name": true,
      "status": true
    }
  }
}
```
