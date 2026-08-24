<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createContactList

mutation · domain `contacts` · requires the WRITE scope

Create an organization-wide contact list (segment). Applied synchronously. Returns the org list catalog; read the new list id back by matching the name you supplied (or use searchContactTags). To fix a name afterwards use renameContactList; to fill it, addContactsToList.

## Call

```ts
const result = await client.contacts.createContactList({ listName: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateContactListMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateContactListMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `listName` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "createContactList": {
      "contactLists": {
        "id": true,
        "name": true
      }
    }
  }
}
```
