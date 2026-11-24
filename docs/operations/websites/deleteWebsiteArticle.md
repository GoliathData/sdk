<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteWebsiteArticle

mutation · domain `websites` · requires the ADMIN scope

Remove an article from a website. Org admins only. Nothing goes live: it opens a website change in the sites repo, which getWebsiteChange follows and publishWebsiteChange puts live on the person's yes.

## Call

```ts
const result = await client.websites.deleteWebsiteArticle({ websiteId: '<text>', slug: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteWebsiteArticleMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteWebsiteArticleMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `websiteId` | `String!` | yes | — |
| `slug` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "websiteArticlesMutation": {
    "delete": {
      "outcome": true,
      "violations": true,
      "slug": true,
      "pullNumber": true,
      "headSha": true
    }
  }
}
```
