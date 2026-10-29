<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteDealComment

mutation · domain `deals` · requires the WRITE scope

Delete a deal comment you wrote, for good. Ask first.

## Call

```ts
const result = await client.deals.deleteDealComment({ commentId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteDealCommentMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteDealCommentMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
  "dealMutation": {
    "deleteDealComment": true
  }
}
```
