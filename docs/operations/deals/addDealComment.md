<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addDealComment

mutation · domain `deals` · requires the WRITE scope

Append a comment to a deal's activity feed, attributed to the API key's owner. Requires a non-empty body (max 10,000 chars). The deal must be in a pipeline owned by or shared with your organization. Returns the created COMMENT event; read the thread back with listDealComments.

## Call

```ts
const result = await client.deals.addDealComment({ dealId: '<id>', body: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddDealCommentMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddDealCommentMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `dealId` | `ID!` | yes | — |
| `body` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "addDealComment": {
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
