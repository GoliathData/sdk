<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteFilter

mutation · domain `properties` · requires the WRITE scope

PERMANENTLY delete a saved filter by id (any type — property, contact, or deal). The row is gone: there is no archive, no undo, and no way to recover the criteria. Get the id from listPropertyFilters / listContactFilters or the saveFilter response. Returns true when a row was deleted. The filter must belong to your organization (a foreign or unknown id is rejected). WHOSE FILTER IS IT: the list ops return `userId`, the owner. A shared filter belonging to a TEAMMATE is deletable here when the key owner is an org admin — check `userId` against getMyProfile (`currentUser.id`) BEFORE deleting, name the owner with getTeammatesByIds, and never delete someone else's filter without saying whose it is and being asked to. If the filter is merely wrong rather than unwanted, updateFilter fixes it in place instead. A teammate's PRIVATE filter is refused outright, admin or not.

## Call

```ts
const result = await client.properties.deleteFilter({ filterId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteFilterMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteFilterMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `filterId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "filterMutation": {
    "deleteFilter": true
  }
}
```
