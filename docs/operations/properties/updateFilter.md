<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateFilter

mutation · domain `properties` · requires the WRITE scope

Edit a saved filter IN PLACE by id (property, contact or deal) — its criteria, name, description, folder or visibility. Never saveFilter again under the same name: that makes a SECOND filter and leaves the wrong one. Ids come from listPropertyFilters / listContactFilters / listDealFilters or the saveFilter response. Every field but the id is optional and an OMITTED one is untouched, so a rename keeps criteria, folder and visibility. An explicit null differs: `folderId: null` takes the filter OUT of its folder (the only way to), while `description: null` is ignored (a description can be replaced, not cleared). `root` REPLACES the whole tree, never merges: to change PART of a filter, getFilter (the only op returning `root`), edit the one condition, and send the whole tree back — never author a replacement from the user's description alone, or you drop every condition you never saw. The tree is saveFilter's DSL (every node needs its own non-empty `id`), validated the same way: an unknown fieldId or invalid value rejects the WHOLE update naming the condition, nothing saved — so NEVER probe by updating; read listFilterFields first (pass `fieldIds` for just those). County/city values as on saveFilter (`fips` from searchCounties, city `id` from searchCities). The response echoes the persisted tree. `type` cannot change — delete and re-create. WHOSE FILTER IS IT: getFilter and the list ops return `userId`, the owner. A TEAMMATE's shared filter is writable here by an org admin with no confirmation and no history, so check `userId` against getMyProfile (`currentUser.id`) and, when it is not yours, say whose it is (getTeammatesByIds) before changing it. A teammate's PRIVATE filter is refused outright and never appears in the list ops. The response may carry `warnings`: non-fatal notes on the saved criteria (e.g. same-named counties from DIFFERENT states, like Cook, IL + Cook, MN — saved, and it matches all of them). RELAY each one with the result, not as a failure; if the selection is not what the user meant, fix it with updateFilter.

## Call

```ts
const result = await client.properties.updateFilter({ filterId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateFilterMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateFilterMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `filterId` | `ID!` | yes | — |
| `name` | `String` | no | — |
| `root` | `JSON` | no | — |
| `description` | `String` | no | — |
| `folderId` | `ID` | no | — |
| `isPrivate` | `Boolean` | no | — |
| `inSavedAreas` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "filterMutation": {
    "updateFilter": {
      "id": true,
      "name": true,
      "type": true,
      "root": true,
      "isPrivate": true,
      "isDefault": true,
      "updatedAt": true,
      "warnings": true
    }
  }
}
```
