<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# countContacts

query · domain `contacts` · requires the READ scope

The number of active contacts visible to you, in one call: the total the Contacts page shows (archived and hidden contacts excluded). Use it for any count-shaped question; never page through findContacts to count. With no arguments it is the total VISIBLE TO THE KEY OWNER, the org-wide total only for an owner holding VIEW_ALL_CONTACTS (applied with or without a filterTree), so never report it as the organization's total unless you know the owner sees every contact. Takes an optional filterTree (saveFilter's DSL), never filterId: a saved filter's count is filterContacts' `total` with its filterId. NEVER save a filter to measure one. A status word ("called", "hot", "dead") can name the org's own tags: searchContactTags for it before you count by an activity or system field alone, and count each reading you find. A count is the answer, 0 included: never re-derive it by paging. Archived contacts are excluded, so 0 means no ACTIVE match. To see how a condition treats empty values, run filterContacts once.

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
