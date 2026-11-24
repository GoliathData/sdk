<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listWebsiteCmsContent

query · domain `websites` · requires the READ scope

A page of goliathdata.com's CMS content of one kind, newest edit first, with each document's path and CMS edit link; null for any other organization. Edited in the CMS, not here. Org admins.

## Call

```ts
const result = await client.websites.listWebsiteCmsContent({ collection: <WebsiteCmsCollection> })
// → Promise<ListWebsiteCmsContentQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListWebsiteCmsContentQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `collection` | `WebsiteCmsCollection!` | yes | — |
| `status` | `WebsiteCmsDocumentStatus` | no | — |
| `page` | `Int` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "websiteArticlesQuery": {
    "cmsContent": {
      "documents": {
        "id": true,
        "title": true,
        "path": true,
        "date": true,
        "updatedAt": true,
        "published": true,
        "author": true,
        "editUrl": true
      },
      "total": true,
      "page": true,
      "pages": true,
      "createUrl": true
    }
  }
}
```
