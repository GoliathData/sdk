<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listEventWorkflowPayloadSamples

query · domain `workflows` · requires the READ scope

The example payloads an EVENT workflow has received or been given (what its sender POSTs), to map trigger fields from. Empty for any other domain. A `run:` id belongs to a run and cannot be deleted.

## Call

```ts
const result = await client.workflows.listEventWorkflowPayloadSamples({ workflowGroupId: '<id>' })
// → Promise<ListEventWorkflowPayloadSamplesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListEventWorkflowPayloadSamplesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "eventWorkflowPayloadSamples": {
      "id": true,
      "source": true,
      "payload": true,
      "receivedAt": true
    }
  }
}
```
