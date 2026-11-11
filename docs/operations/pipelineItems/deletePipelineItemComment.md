<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deletePipelineItemComment

mutation · domain `pipelineItems` · requires the WRITE scope

Delete a pipeline item comment you wrote, for good. Ask first.

## Call

```ts
const result = await client.pipelineItems.deletePipelineItemComment({ commentId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeletePipelineItemCommentMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeletePipelineItemCommentMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `commentId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemMutation": {
    "deletePipelineItemComment": true
  }
}
```
