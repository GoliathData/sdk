<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listWebsiteArticles

query · domain `websites` · requires the READ scope

One website's articles (`websiteId` from listWebsites), live ones and those its open change adds: slug, title, description, date, author, cover, and what its open change does to each (`pendingChange`; a NEW one cannot be read, edited or removed here until that change is published). `collection` null with a `reason`: the site has no article collection, so none can be added. Org admins only.

## Call

```ts
const result = await client.websites.listWebsiteArticles({ websiteId: '<text>' })
// → Promise<ListWebsiteArticlesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListWebsiteArticlesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `websiteId` | `String!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "websiteArticlesQuery": {
    "articles": {
      "collection": {
        "directory": true,
        "route": true
      },
      "reason": true,
      "articles": {
        "slug": true,
        "title": true,
        "description": true,
        "date": true,
        "author": true,
        "cover": true,
        "pendingChange": true
      }
    }
  }
}
```
