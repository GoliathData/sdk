<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# searchSpaces

query · domain `spaces` · requires the READ scope

One search across everything the Library rail reaches — FILES (folders and files), LIBRARY (templates, contracts, contract templates, forms, tables, pages) and DATA (uploads, downloads) — matching titles and, for templates and contracts, their content. Grouped by zone, best `limit` per zone, each hit with its own id (a Library item id, a template id, a contract id …), `kind` and the app link (`target.href`) to send the person. Narrow with `zones`. Each source applies its own page's access rule.

## Call

```ts
const result = await client.spaces.searchSpaces({ query: '<text>' })
// → Promise<SearchSpacesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SearchSpacesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `query` | `String!` | yes | — |
| `zones` | `[SpacesSearchZone!]` | no | — |
| `limit` | `Int` | no | 10 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 25.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesQuery": {
    "spacesSearch": {
      "query": true,
      "groups": {
        "zone": true,
        "total": true,
        "totalIsLowerBound": true,
        "hits": {
          "id": true,
          "zone": true,
          "kind": true,
          "title": true,
          "subtitle": true,
          "snippet": {
            "text": true
          },
          "location": true,
          "fileType": true,
          "updatedAt": true,
          "target": {
            "href": true
          }
        }
      },
      "incompleteZones": true
    }
  }
}
```
