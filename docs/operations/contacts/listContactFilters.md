<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listContactFilters

query · domain `contacts` · requires the READ scope

List the saved contact filters VISIBLE to the key owner; run one with filterContacts, delete one with deleteContactFilter. Rows are metadata plus `criteriaSummary`, the conditions in one line: answer what a filter does from it; getFilter `root` is the whole tree. Create one with saveFilter (a properties op; pass type: CONTACT). Every row carries `userId` (the OWNER) and `createdAt`. READ `userId` BEFORE ANY WRITE: the list is every SHARED filter in the organization, whoever made it, plus your own private ones (`isPrivate: true`). A row whose `userId` is not the key owner's is a TEAMMATE'S filter, and updateFilter / deleteContactFilter will write to it when the key owner is an org admin. The key owner's id is getMyProfile `currentUser.id`; name a teammate's id with getTeammatesByIds, not listTeammates. When a filter is someone else's, say whose before changing or deleting it.

## Call

```ts
const result = await client.contacts.listContactFilters()
// → Promise<ListContactFiltersQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListContactFiltersQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
