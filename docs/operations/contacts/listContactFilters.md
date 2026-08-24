<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listContactFilters

query · domain `contacts` · requires the READ scope

List the saved contact filters VISIBLE to the key owner. Use a filter id with filterContacts. The filter definition itself stays server-side — the API references it by id, never by raw query. To CREATE a saved contact filter, use the saveFilter operation (listed under the properties domain, but it saves BOTH contact and property filters — pass type: CONTACT). Every row carries `userId` (the OWNER) and `createdAt`. READ `userId` BEFORE ANY WRITE: this list is NOT just your filters — it is every SHARED filter in the organization whoever created it, plus your own private ones (`isPrivate: true`). A row whose `userId` is not the key owner's is a TEAMMATE'S filter, and updateFilter / deleteFilter will happily write to it when the key owner is an org admin. Get the key owner's id from getMyProfile (`currentUser.id`) and a teammate's name from getTeammatesByIds — not listTeammates, which searches names and caps at 20 rows, so it cannot answer who a bare uuid is. When a filter turns out to be someone else's, say whose it is before changing or deleting it.

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
      "createdAt": true
    }
  }
}
```
