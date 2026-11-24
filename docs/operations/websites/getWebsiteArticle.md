<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getWebsiteArticle

query · domain `websites` · requires the READ scope

One article of a website with its Markdown body; null when there is no such article. Org admins only.

## Call

```ts
const result = await client.websites.getWebsiteArticle({ websiteId: '<text>', slug: '<text>' })
// → Promise<GetWebsiteArticleQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetWebsiteArticleQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `websiteId` | `String!` | yes | — |
| `slug` | `String!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "websiteArticlesQuery": {
    "article": {
      "slug": true,
      "title": true,
      "description": true,
      "date": true,
      "author": true,
      "cover": true,
      "body": true
    }
  }
}
```
