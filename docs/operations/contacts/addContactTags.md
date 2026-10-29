<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addContactTags

mutation · domain `contacts` · requires the WRITE scope

Add tags to contacts: existing ones by `tagIds` (searchContactTags), new ones by exact name in `newTagNames`, created as this runs, never createContactTag first. removeContactTags is the twin. Async bulk job: poll `bulkTaskId` with getBulkTask; a read-back right away will NOT show it. POTENTIALLY OUTBOUND: a CONTACT workflow whose trigger names a tag starts a run that can text or email; on a large selection check first (listWorkflows { status: ACTIVE, triggerType: [MATCH, MUTATION] }, then their graph `triggers`).

## Call

```ts
const result = await client.contacts.addContactTags({ contactIds: ['<text>'], tagIds: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddContactTagsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddContactTagsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[String!]!` | yes | — |
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
