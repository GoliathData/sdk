<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# countContacts

query · domain `contacts` · requires the READ scope

The number of active contacts visible to you, in one call — the same total the Contacts page shows. Counts what your permissions can see; excludes archived and hidden contacts. Use this for any count-shaped question — never page through findContacts to count. Called with no arguments it returns the total VISIBLE TO THE KEY OWNER, which is the org-wide total only for an owner holding VIEW_ALL_CONTACTS: the capability is applied to the count with or without a filterTree, so never report this number as the organization's total unless you know the owner can see every contact. Pass filterTree (the same filter-tree DSL saveFilter takes) to count what a filter WOULD match without saving it — this is how you check a filter before creating it. NEVER save a filter to measure one. A count alone cannot settle a claim about BEHAVIOUR, though: a total says nothing about which records moved, so to check whether a condition includes records that have no value for the field, run filterContacts with the same tree and look for one such record.

## Call

```ts
const result = await client.contacts.countContacts()
// → Promise<CountContactsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CountContactsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `filterTree` | `JSON` | no | {id: "root", operator: "AND", conditions: [], groups: []} |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "getContactsCount": true
  }
}
```
