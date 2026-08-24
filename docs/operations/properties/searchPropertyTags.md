<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# searchPropertyTags

query · domain `properties` · requires the READ scope

Search your organization's property tags and lists by name. Use a tag id with addPropertyTags and a list id with addPropertiesToList.

## Call

```ts
const result = await client.properties.searchPropertyTags({ searchTerm: '<text>' })
// → Promise<SearchPropertyTagsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SearchPropertyTagsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `searchTerm` | `String!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "property": {
    "searchTags": {
      "tags": {
        "id": true,
        "name": true,
        "folderId": true
      },
      "lists": {
        "id": true,
        "name": true,
        "folderId": true
      }
    }
  }
}
```
