<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listPipelineItemFilters

query · domain `pipelineItems` · requires the READ scope

List the saved DEAL filters VISIBLE to the key owner: every shared pipeline item filter in the organization plus your own private ones. Metadata plus `criteriaSummary` (its conditions in one line); read one filter's whole tree with getFilter, create one with saveFilter (type: DEAL), change it with updateFilter. Run one with filterPipelineItems. The Pipeline items board in the app has no saved-filter list, so a pipeline item filter lives here, not in a sidebar. Every row carries `userId`, the OWNER: a row whose userId is not the key owner's is a teammate's filter, so say whose it is before changing or deleting it.

## Call

```ts
const result = await client.pipelineItems.listPipelineItemFilters()
// → Promise<ListPipelineItemFiltersQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListPipelineItemFiltersQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
