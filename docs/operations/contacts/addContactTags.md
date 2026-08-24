<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addContactTags

mutation · domain `contacts` · requires the WRITE scope

Apply existing tags (by tag id, from searchContactTags/createContactTag) to contacts. The removal twin is removeContactTags. Runs as an async bulk job — returns a bulkTaskId to poll with getBulkTask; the change is NOT visible to an immediate read-back. POTENTIALLY OUTBOUND: adding a tag publishes a contact tags-changed event, and a CONTACT workflow whose trigger names that tag starts a run — which can text or email the contact. Whether one exists is org state you have to check (listWorkflows → getWorkflow → getWorkflowVersionGraph, whose `triggers` name the tag), so on a large selection either check or confirm with the user first.

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
