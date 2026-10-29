<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteContactFilter

mutation · domain `contacts` · requires the WRITE scope

PERMANENTLY delete a saved CONTACT filter by id (from listContactFilters): no archive, no undo. Returns true when a row was deleted; a foreign or unknown id is rejected, and a property or deal filter id is refused with nothing deleted. WHOSE FILTER IS IT: listContactFilters returns `userId`, the owner. A TEAMMATE'S shared filter is deletable when the key owner is an org admin, so check `userId` against getMyProfile (`currentUser.id`) first and say whose it is. A teammate's PRIVATE filter is refused outright. If the filter is merely wrong rather than unwanted, updateFilter (properties domain; it edits contact filters too) fixes it in place.

## Call

```ts
const result = await client.contacts.deleteContactFilter({ filterId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteContactFilterMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteContactFilterMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
