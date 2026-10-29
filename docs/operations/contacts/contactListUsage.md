<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# contactListUsage

query · domain `contacts` · requires the READ scope

EVERY list in ONE call, import uploads ("Contacts from … .csv", kind UPLOAD) and exports included, emptiest first: contactCount (unarchived you see), orgActiveContactCount / orgArchivedContactCount and isEmpty (no unarchived contact in the org; null unless you can view all contacts). onlyEmpty and kinds narrow it. Use instead of a countContacts per list. Tags are contactTagUsage.

## Call

```ts
const result = await client.contacts.contactListUsage()
// → Promise<ContactListUsageQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ContactListUsageQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `kinds` | `[ContactListKind!]` | no | — |
| `onlyEmpty` | `Boolean` | no | false |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "contactListUsage": {
      "lists": {
        "id": true,
        "name": true,
        "kind": true,
        "contactCount": true,
        "orgActiveContactCount": true,
        "orgArchivedContactCount": true,
        "isEmpty": true
      },
      "totalCount": true,
      "emptyCount": true
    }
  }
}
```
