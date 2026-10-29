<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# recordEventWorkflowPayloadSample

mutation · domain `workflows` · requires the WRITE scope

Save an example payload (a JSON object, what the sender would POST) on an EVENT workflow, so its fields can be mapped before anything arrives. Starts no run, sends nothing, leaves the graph alone. Refused on a workflow the key owner cannot edit.

## Call

```ts
const result = await client.workflows.recordEventWorkflowPayloadSample({ workflowGroupId: '<id>', payload: <JSON> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RecordEventWorkflowPayloadSampleMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RecordEventWorkflowPayloadSampleMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |
| `payload` | `JSON!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "recordEventWorkflowPayloadSample": {
      "id": true,
      "source": true,
      "receivedAt": true
    }
  }
}
```
