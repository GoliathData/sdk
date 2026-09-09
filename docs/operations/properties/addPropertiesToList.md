<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addPropertiesToList

mutation · domain `properties` · requires the WRITE scope

Add properties to one or more lists (list ids from searchPropertyTags). ASYNC bulk-task op — returns bulkTaskId before the change applies; poll getBulkTask. TWO selection forms, never combined (ids with a filter is rejected). EXPLICIT: `propertyIds` (esIds) with `totalCount` = how many. FILTER-BACKED: `filterId` (saved; must be visible to the key owner — a teammate's private filter is refused) OR `filterTree` (inline, saveFilter's DSL, parsed STRICTLY — an unknown fieldId rejects the call) with `selectAll: true` for EVERY match or `selectCount: N` for the first N in the runner's DEFAULT traversal order — NOT the `sort` you previewed with on filterProperties, which the bulk task does not take; for a sorted top-N, pass that sorted page's ids as `propertyIds` (one window, not both; a filter with neither is REFUSED, never read as select-all). `excludeIds` applies to a filter-backed selection only (on the explicit form, leave the id out). `totalCount` is an EXECUTION CAP the task stops at. It is DERIVED server-side for explicit ids (their count) and for `selectCount: N` (N — exclusions are not subtracted, the runner drops them as it goes) — whatever you send is ignored there, and a negative value is rejected — and TRUSTED only for `selectAll: true`: pass the filter's `total` from filterProperties UNSUBTRACTED (never minus `excludeIds` — the runner handles exclusions). An understated select-all count silently turns it into a partial write, so round UP. Pass the same `includeIncompleteRecords` you used on filterProperties. A filter-backed selection can touch thousands of properties in one call: state the match count to the user and get a go-ahead BEFORE submitting one.

## Call

```ts
const result = await client.properties.addPropertiesToList({ listIds: ['<text>'], totalCount: 0 }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddPropertiesToListMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddPropertiesToListMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
