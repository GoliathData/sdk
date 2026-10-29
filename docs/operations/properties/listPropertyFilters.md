<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listPropertyFilters

query · domain `properties` · requires the READ scope

List the saved property filters VISIBLE to the key owner; run one by id with filterProperties (the tree stays server-side — getFilter reads it). Each row has `userId` (the OWNER), `folderId`, `createdAt` and `criteriaSummary` (its conditions in one line; getFilter for the whole tree). READ `userId` BEFORE ANY WRITE: the list is every SHARED filter in the org, whoever made it, plus your own private ones (`isPrivate: true`), and updateFilter / deleteFilter will write a TEAMMATE's for an org admin. Your id is getMyProfile `currentUser.id`; name a teammate's id with getTeammatesByIds. Say whose a filter is before changing or deleting it.

## Call

```ts
const result = await client.properties.listPropertyFilters()
// → Promise<ListPropertyFiltersQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListPropertyFiltersQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "filterQuery": {
    "getFilters": {
      "id": true,
      "name": true,
      "description": true,
      "folderId": true,
      "isPrivate": true,
      "isDefault": true,
      "userId": true,
      "createdAt": true,
      "criteriaSummary": true
    }
  }
}
```
