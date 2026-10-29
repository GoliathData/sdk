<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteFilter

mutation · domain `properties` · requires the WRITE scope

PERMANENTLY delete a saved filter by id (any type): no archive, no undo. Ids from listPropertyFilters / listContactFilters / saveFilter; returns true when a row was deleted, and a foreign or unknown id is rejected. WHOSE FILTER IS IT: an org admin can delete a teammate's SHARED filter here, so check `userId` against getMyProfile (`currentUser.id`) first, name the owner (getTeammatesByIds), and never delete someone else's filter unasked. A merely wrong filter is fixed with updateFilter. A teammate's PRIVATE filter is refused outright.

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
