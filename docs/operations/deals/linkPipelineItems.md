<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# linkPipelineItems

mutation · domain `deals` · requires the WRITE scope

Link two unarchived deals on your org's own pipelines; both list it (getDeal linkedItems).

## Call

```ts
const result = await client.deals.linkPipelineItems({ pipelineItemId: '<id>', otherPipelineItemId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<LinkPipelineItemsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `LinkPipelineItemsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineItemId` | `ID!` | yes | — |
| `otherPipelineItemId` | `ID!` | yes | — |
| `label` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "linkPipelineItems": {
      "id": true
    }
  }
}
```
