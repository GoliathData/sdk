<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getWebsiteArticlePreview

query · domain `websites` · requires the READ scope

The preview build of an article change (`headSha` from saveWebsiteArticle or deleteWebsiteArticle): BUILDING, READY with its URL, or FAILED with the build page. Org admins only.

## Call

```ts
const result = await client.websites.getWebsiteArticlePreview({ websiteId: '<text>', headSha: '<text>' })
// → Promise<GetWebsiteArticlePreviewQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetWebsiteArticlePreviewQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `websiteId` | `String!` | yes | — |
| `headSha` | `String!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "websiteArticlesQuery": {
    "preview": {
      "state": true,
      "previewUrl": true,
      "detailsUrl": true
    }
  }
}
```
