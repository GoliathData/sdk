<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createOrReturnWorkflowDraft

mutation · domain `workflows` · requires the WRITE scope

Idempotent "edit": return the existing DRAFT version under this workflow, or clone the live (or most recently paused) version into a fresh DRAFT. Use the returned id with updateWorkflowGraph. WEBHOOK SECRETS ARE REDACTED. A `send_webhook_action` step's `config.auth.secret` reads as the literal `__GOLIATH_WEBHOOK_SECRET_REDACTED__` — never the credential, never a value to quote or reason about. Send it BACK UNCHANGED in updateWorkflowGraph to keep the stored secret, and a different string only when the user is deliberately rotating it. Never invent, guess or complete a replacement: that overwrites a working credential. The sentinel on a step with no stored secret behind it (a step you just added, or a graph read so long ago its node ids rotated) is REFUSED: re-read the graph and carry it from the fresh copy. 

## Call

```ts
const result = await client.workflows.createOrReturnWorkflowDraft({ workflowGroupId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateOrReturnWorkflowDraftMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateOrReturnWorkflowDraftMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "createOrReturnWorkflowGroupDraft": {
      "id": true,
      "workflowGroupId": true,
      "name": true,
      "status": true,
      "stepKinds": true,
      "updatedAt": true,
      "graph": true
    }
  }
}
```
