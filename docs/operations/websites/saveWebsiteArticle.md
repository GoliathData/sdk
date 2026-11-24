<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# saveWebsiteArticle

mutation · domain `websites` · requires the ADMIN scope

Write a new article on a website (`input.folder` is the websiteId; no slug: made from the title), or edit one by slug. Body is Markdown, raw HTML refused; a cover is an uploaded image id. `outcome` REFUSED lists `violations`. Org admins only. Nothing goes live: it opens a website change in the sites repo, which getWebsiteChange follows and publishWebsiteChange puts live on the person's yes.

## Call

```ts
const result = await client.websites.saveWebsiteArticle({ input: <SaveWebsiteArticleInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SaveWebsiteArticleMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SaveWebsiteArticleMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `SaveWebsiteArticleInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "websiteArticlesMutation": {
    "save": {
      "outcome": true,
      "violations": true,
      "slug": true,
      "pullNumber": true,
      "headSha": true
    }
  }
}
```
