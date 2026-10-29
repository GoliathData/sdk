<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# promoteWorkflowDraft

mutation · domain `workflows` · requires the WRITE scope

Ship it: promote the workflow's current DRAFT to ACTIVE (live). MIGRATE (default) moves in-flight runs to the new version: on a kept step they continue with the new copy, on a removed step they finish, held by a pause they wake. PAUSE keeps them on the old version, whose copy they send if resumed. Fails without a valid draft (see getWorkflow.draftValidation).

## Call

```ts
const result = await client.workflows.promoteWorkflowDraft({ workflowGroupId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<PromoteWorkflowDraftMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PromoteWorkflowDraftMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |
| `inFlightRunsStrategy` | `InFlightRunsStrategy` | no | MIGRATE |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "promoteWorkflowGroupDraftToLive": {
      "id": true,
      "name": true,
      "status": true,
      "currentVersion": {
        "id": true,
        "name": true,
        "status": true
      }
    }
  }
}
```
