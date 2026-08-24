<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getFilter

query · domain `properties` · requires the READ scope

Fetch ONE saved filter by id, including its full `root` criteria tree — the only operation that returns the tree (listPropertyFilters / listContactFilters return metadata only). Works for both contact and property filters. Call this BEFORE updateFilter whenever you are changing PART of a filter: updateFilter replaces `root` wholesale, so without reading the current tree first you would be re-authoring it blind and would silently drop every condition you didn't know was there. Read it, modify the one condition you mean to change, and send the modified tree back. The tree is the same group/condition DSL saveFilter documents; treat its shape as expert-level and unstable rather than a frozen contract.

## Call

```ts
const result = await client.properties.getFilter({ filterId: '<id>' })
// → Promise<GetFilterQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetFilterQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `filterId` | `ID!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "filterQuery": {
    "getFilter": {
      "id": true,
      "name": true,
      "type": true,
      "description": true,
      "folderId": true,
      "root": true,
      "isPrivate": true,
      "isDefault": true,
      "userId": true,
      "createdAt": true,
      "updatedAt": true
    }
  }
}
```
