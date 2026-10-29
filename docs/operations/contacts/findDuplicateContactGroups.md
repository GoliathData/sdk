<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# findDuplicateContactGroups

query · domain `contacts` · requires the READ scope

Every duplicate group (same name + shared phone or email) in ONE call, never contact by contact. matchBy: NAME = name alone, unverified, each group listing the phones and emails its members share (reserved domains too); tagIds = groups with a contact carrying one of these tags or on one of these lists. It skips emails on reserved domains (example.com, .test; reservedEmailGroupCount counts the same-name groups sharing only one) and misses name variants: never say a group shares no phone or email, nor call the account duplicate-free. Confirm, then mergeContacts per group.

## Call

```ts
const result = await client.contacts.findDuplicateContactGroups()
// → Promise<FindDuplicateContactGroupsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `FindDuplicateContactGroupsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `limit` | `Int` | no | 50 |
| `offset` | `Int` | no | 0 |
| `matchBy` | `DuplicateContactMatch` | no | NAME_AND_CONTACT_INFO |
| `tagIds` | `[ID!]` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 100.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "duplicateContactGroups": {
      "groups": {
        "contacts": {
          "id": true,
          "name": true
        },
        "sharedPhoneNumbers": true,
        "sharedEmails": true
      },
      "totalCount": true,
      "truncated": true,
      "hasMore": true,
      "reservedEmailGroupCount": true
    }
  }
}
```
