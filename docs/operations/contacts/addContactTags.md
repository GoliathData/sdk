<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addContactTags

mutation · domain `contacts` · requires the WRITE scope

Add tags to contacts: existing ones by `tagIds` (searchContactTags), new ones by exact name in `newTagNames`, created as this runs, never createContactTag first. removeContactTags is the twin. Async bulk job: poll `bulkTaskId` with getBulkTask; a read-back right away will NOT show it. POTENTIALLY OUTBOUND: a CONTACT workflow whose trigger names a tag starts a run that can text or email; on a large selection check first (listWorkflows { status: ACTIVE, triggerType: [MATCH, MUTATION] }, then their graph `triggers`). SELECTION, one of two forms: `contactIds`, or a contact filter (`filterId` from listContactFilters, or an inline `filterTree` in saveFilter’s CONTACT DSL, parsed strictly) with `selectCount: N`, the first N matches: count the filter with countContacts and pass that count. A filter without selectCount, or beside contactIds, is refused. At most 20,000 contacts per call.

## Call

```ts
const result = await client.contacts.addContactTags({ tagIds: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddContactTagsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddContactTagsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[String!]` | no | — |
| `filterId` | `ID` | no | — |
| `filterTree` | `JSON` | no | — |
| `selectCount` | `Int` | no | — |
| `tagIds` | `[String!]!` | yes | — |
| `newTagNames` | `[String!]` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "addTagsToContacts": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
