<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setPipelineDetailTabs

mutation · domain `pipelineItems` · requires the WRITE scope

Replace one pipeline's pipeline item-sheet tabs for everyone (getPipelineDetailTabs first, and pass its version as expectedVersion: a stale one is refused). Owner pipelines only.

## Call

```ts
const result = await client.pipelineItems.setPipelineDetailTabs({ pipelineId: '<id>', expectedVersion: 0, tabs: [<PipelineItemLayoutTabInput>] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetPipelineDetailTabsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetPipelineDetailTabsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineId` | `ID!` | yes | — |
| `expectedVersion` | `Int!` | yes | — |
| `tabs` | `[PipelineItemLayoutTabInput!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemMutation": {
    "updatePipelineDetailLayout": {
      "version": true,
      "tabs": {
        "id": true,
        "name": true,
        "fieldReferences": true
      }
    }
  }
}
```
