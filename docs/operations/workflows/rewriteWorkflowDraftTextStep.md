<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# rewriteWorkflowDraftTextStep

mutation · domain `workflows` · requires the WRITE scope

The publish dialog's "Rewrite for me": reword one DRAFT text step to lower its carrier-filter risk, saved on the draft. Pass a getWorkflow.draftValidation.carrierRisk row's nodeId, and its body as expectedBody; only for a medium or high `band`. A row with a templateId is the template's copy: reword it with updateContentTemplate instead (here it is refused). status REWRITTEN (body saved), else NO_BETTER_REWRITE or STEP_CHANGED (it no longer carries expectedBody), the step unchanged. Never publishes.

## Call

```ts
const result = await client.workflows.rewriteWorkflowDraftTextStep({ workflowGroupId: '<id>', nodeId: '<id>', expectedBody: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RewriteWorkflowDraftTextStepMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RewriteWorkflowDraftTextStepMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |
| `nodeId` | `ID!` | yes | — |
| `expectedBody` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "rewriteWorkflowDraftTextStep": {
      "status": true,
      "body": true,
      "scoreBefore": true,
      "scoreAfter": true
    }
  }
}
```
