<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setPipelineItemAgent

mutation · domain `pipelineItems` · requires the WRITE scope

Make a teammate assigned to the pipeline item its deal owner (getPipelineItem agent), who speaks for it.

## Call

```ts
const result = await client.pipelineItems.setPipelineItemAgent({ pipelineItemId: '<id>', userId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetPipelineItemAgentMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetPipelineItemAgentMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineItemId` | `ID!` | yes | — |
| `userId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemMutation": {
    "setPipelineItemAgent": {
      "id": true,
      "agent": {
        "id": true,
        "firstName": true,
        "lastName": true
      }
    }
  }
}
```
