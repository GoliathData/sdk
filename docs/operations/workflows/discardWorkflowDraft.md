<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# discardWorkflowDraft

mutation · domain `workflows` · requires the WRITE scope

Discard the workflow's current DRAFT version, if any. Idempotent — a no-op when there is no draft.

## Call

```ts
const result = await client.workflows.discardWorkflowDraft({ workflowGroupId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DiscardWorkflowDraftMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DiscardWorkflowDraftMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "discardWorkflowGroupDraft": {
      "id": true,
      "name": true,
      "status": true,
      "pendingDraft": {
        "id": true
      }
    }
  }
}
```
