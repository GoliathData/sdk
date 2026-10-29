<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# editDealComment

mutation · domain `deals` · requires the WRITE scope

Replace the body of your own deal comment (listDealComments id).

## Call

```ts
const result = await client.deals.editDealComment({ commentId: '<id>', body: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<EditDealCommentMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `EditDealCommentMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `commentId` | `ID!` | yes | — |
| `body` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "editDealComment": {
      "id": true,
      "createdAt": true,
      "payload": true
    }
  }
}
```
