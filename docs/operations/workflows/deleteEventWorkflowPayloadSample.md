<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteEventWorkflowPayloadSample

mutation · domain `workflows` · requires the WRITE scope

Delete one pasted example payload for good (sampleId from listEventWorkflowPayloadSamples). A `run:` sample is NOT_FOUND.

## Call

```ts
const result = await client.workflows.deleteEventWorkflowPayloadSample({ workflowGroupId: '<id>', sampleId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteEventWorkflowPayloadSampleMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteEventWorkflowPayloadSampleMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |
| `sampleId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "deleteEventWorkflowPayloadSample": true
  }
}
```
