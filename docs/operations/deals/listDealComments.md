<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listDealComments

query · domain `deals` · requires the READ scope

One deal's comment thread, most-recent-first (the activity feed narrowed to COMMENT events, paged at the database — the full thread stays reachable however busy the rest of the feed is). The comment text is in the SuperJSON payload at `json.body`; actor identifies the commenter. Page with offset.

## Call

```ts
const result = await client.deals.listDealComments({ dealId: '<id>' })
// → Promise<ListDealCommentsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListDealCommentsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `dealId` | `ID!` | yes | — |
| `limit` | `Int` | no | 50 |
| `offset` | `Int` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealQuery": {
    "getDeal": {
      "id": true,
      "events": {
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
}
```
