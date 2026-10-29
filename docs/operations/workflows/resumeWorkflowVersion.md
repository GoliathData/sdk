<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# resumeWorkflowVersion

mutation · domain `workflows` · requires the WRITE scope

Resume a specific PAUSED version (by workflowAutomationId), pausing the active sibling first. Promotion is ONE-WAY, so this is NOT a roll-back: it REJECTS a version that is not PAUSED, and it REJECTS a SUPERSEDED version (one with a later-published sibling) with "Only the most recently published version can be resumed." So it can only activate the most recently PUBLISHED paused version. Do not treat resumeWorkflow as an equivalent fallback: it picks the most recently PAUSED version (a different ordering: a version paused later may have been published earlier) and NO-OPS when an active sibling exists, where this op pauses that sibling first. To bring an OLDER version back, use restoreWorkflowVersionAsDraft, never a retry of this op.

## Call

```ts
const result = await client.workflows.resumeWorkflowVersion({ workflowAutomationId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ResumeWorkflowVersionMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ResumeWorkflowVersionMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "resumeWorkflowVersion": {
      "id": true,
      "workflowGroupId": true,
      "name": true,
      "status": true
    }
  }
}
```
