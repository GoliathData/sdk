<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addPropertiesToList

mutation · domain `properties` · requires the WRITE scope

Add one or more properties (by id/esId) to one or more lists (by list id). ASYNC bulk-task op — returns mode + bulkTaskId BEFORE the change is applied; poll getBulkTask(bulkTaskId) to track completion. The selection is fixed to the explicit ids you pass: this operation always sends selectAll: false, so there is no filter-backed "add every match" form THROUGH THIS API — to add a whole filter's worth, page filterProperties and pass the ids. The app's property table DOES have select-all-across-pages on its bulk-action bar, so for a very large filter hand the user that surface; never tell them Goliath cannot add a whole filter to a list. Set totalCount to the number of property ids you pass (it is the item count used for progress/scaling). Get list ids from searchPropertyTags.

## Call

```ts
const result = await client.properties.addPropertiesToList({ propertyIds: ['<text>'], listIds: ['<text>'], totalCount: 0 }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddPropertiesToListMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddPropertiesToListMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `propertyIds` | `[String!]!` | yes | — |
| `listIds` | `[String!]!` | yes | — |
| `totalCount` | `Int!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "propertyMutation": {
    "addPropertiesToList": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
