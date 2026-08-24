<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# renameContactList

mutation · domain `contacts` · requires the WRITE scope

Rename an existing contact LIST in place (listId from searchContactTags `lists`) — "rename Hot Leads to Priority Sellers". THIS IS THE CORRECT WAY TO FIX A LIST NAME: deleteContactLists plus createContactList is irreversible and drops every membership, while a rename keeps the id, so the members, and every saved filter and workflow pointing at the list, are untouched. Applied synchronously; returns the org list catalog with the new name. LIST ids only — a free-form tag or custom-field id is refused at the gateway (rename those with renameContactTag / updateContactCustomField). The name must be non-empty and at most 100 characters, and list names are unique within the organization, so renaming onto an existing list name is rejected. This changes only the label; it does not move, merge or re-evaluate membership.

## Call

```ts
const result = await client.contacts.renameContactList({ listId: '<id>', newName: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RenameContactListMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RenameContactListMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `listId` | `ID!` | yes | — |
| `newName` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "updateContactList": {
      "contactLists": {
        "id": true,
        "name": true
      }
    }
  }
}
```
