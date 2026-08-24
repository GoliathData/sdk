<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateFilter

mutation · domain `properties` · requires the WRITE scope

Edit a saved filter IN PLACE by id (any type — property or contact). THIS IS THE CORRECT WAY TO FIX A FILTER: to change a saved filter's criteria, name, description, folder, or visibility, call updateFilter on the existing id — do NOT call saveFilter again with the same name, which creates a SECOND filter and leaves the wrong one in place. Get the id from listPropertyFilters / listContactFilters or the saveFilter response. Every field except the id is optional; whatever you OMIT is left untouched, so a name-only rename does not disturb the criteria, the folder, or the visibility. Sending an explicit null is a different instruction from omitting: `group: null` MOVES THE FILTER OUT of its folder (that is the only way to un-folder one), while `description: null` is ignored — a description can be replaced but not cleared. `root` REPLACES the whole filter tree — it is NOT merged into the existing one, so anything you leave out is gone. To change PART of a filter you must therefore start from the current tree: call getFilter (the only op that returns `root`; the list ops return metadata only), modify the one condition you mean to change, and send the complete modified tree back. Never author a replacement tree from the user's description alone when the filter already has criteria — you would drop every condition you never saw. The tree is the same group/condition DSL saveFilter documents (every group and condition node needs its own non-empty `id`), validated the same way: an unknown fieldId, or an invalid value for a known field, rejects the WHOLE update as invalid input naming the offending condition — nothing is saved, so NEVER probe field support by updating. Get valid fieldIds and value shapes from listFilterFields FIRST (pass fieldIds to it to fetch just the fields you need). County/city values follow saveFilter: `fips` from searchCounties, city `id` from searchCities. The response echoes the persisted tree back for confirmation. A filter's `type` cannot be changed — delete and re-create to move a filter between domains. WHOSE FILTER IS IT: the list ops and getFilter return `userId`, the owner. A shared filter belonging to a TEAMMATE is writable here when the key owner is an org admin, with no confirmation step and no field history — the old name, description and criteria are simply gone. Check `userId` against getMyProfile (`currentUser.id`) first, and when it is not yours, say whose it is (getTeammatesByIds turns the id into a name) before you change it. A teammate's PRIVATE filter is refused outright, admin or not, and never appears in the list ops at all. The response may carry `warnings` — non-fatal advisories about the saved criteria (e.g. the county selection combines same-named counties from DIFFERENT states, like Cook, IL + Cook, MN: the save succeeded and the filter matches all of them). RELAY any warning to the user with the result — do not drop it, and do not treat it as a failure; if it reveals the selection is not what the user meant, fix the filter with updateFilter.

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
