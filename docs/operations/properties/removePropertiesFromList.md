<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# removePropertiesFromList

mutation · domain `properties` · requires the WRITE scope

Remove properties from ONE list (`listId` from searchPropertyTags or getProperty's `lists`). ASYNC bulk-task op — poll getBulkTask(bulkTaskId). Same selection rules as addPropertiesToList: EXPLICIT `propertyIds` + `totalCount`, or FILTER-BACKED `filterId` / `filterTree` (strict) with `selectAll: true` or `selectCount: N` for the first N in DEFAULT traversal order, never a previewed `sort` — use `propertyIds` for a sorted top-N (one window, not both; neither is REFUSED), `excludeIds` on the filter-backed form only. `totalCount` is an EXECUTION CAP, derived server-side for explicit ids and `selectCount` and trusted only for select-all: the filter's `total` from filterProperties UNSUBTRACTED; understated means the removal stops early, so round up. Not on the list is skipped, not an error. Removes MEMBERSHIP only — list and properties survive. A filter-backed selection can touch thousands of properties in one call: state the match count to the user and get a go-ahead BEFORE submitting one.

## Call

```ts
const result = await client.properties.removePropertiesFromList({ listId: '<text>', totalCount: 0 }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RemovePropertiesFromListMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RemovePropertiesFromListMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `propertyIds` | `[String!]` | no | — |
| `filterId` | `ID` | no | — |
| `filterTree` | `JSON` | no | — |
| `selectAll` | `Boolean` | no | false |
| `selectCount` | `Int` | no | — |
| `excludeIds` | `[String!]` | no | — |
| `includeIncompleteRecords` | `Boolean` | no | — |
| `listId` | `String!` | yes | — |
| `totalCount` | `Int!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "propertyMutation": {
    "removePropertiesFromList": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
