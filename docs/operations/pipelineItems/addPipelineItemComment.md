<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addPipelineItemComment

mutation · domain `pipelineItems` · requires the WRITE scope

Append a comment to a pipeline item's activity feed, attributed to the API key's owner. Requires a non-empty body (max 10,000 chars). The pipeline item must be in a pipeline owned by or shared with your organization. Returns the created COMMENT event; read the thread back with listPipelineItemComments.

## Call

```ts
const result = await client.pipelineItems.addPipelineItemComment({ pipelineItemId: '<id>', body: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddPipelineItemCommentMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddPipelineItemCommentMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineItemId` | `ID!` | yes | — |
| `body` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemMutation": {
    "addPipelineItemComment": {
      "id": true,
      "eventType": true,
      "createdAt": true,
      "actor": {
        "userId": true,
        "name": true
      },
      "payload": true
    }
  }
}
```
