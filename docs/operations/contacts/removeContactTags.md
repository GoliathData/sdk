<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# removeContactTags

mutation · domain `contacts` · requires the WRITE scope

Strip tags (tag ids from searchContactTags) off contacts: the removal twin of addContactTags, and the undo for a bulk tag that leaves the tag definition alone. The tag survives and stays on every contact you did not name; deleteContactTags is the destructive org-wide one. Async bulk job: returns a bulkTaskId to poll with getBulkTask; an immediate read-back will not show the change. Only FREE-FORM tag ids do anything: a list or custom-field id is IGNORED, not rejected, so the task completes having removed nothing. Take ids from searchContactTags `tags` (not `lists`); drop list membership with removeContactsFromList. A contact without the tag is skipped, not failed. POTENTIALLY OUTBOUND, like the add side: removal publishes a tags-changed event carrying removeTagIds, and a CONTACT workflow whose tag trigger is EXCLUSIVE ("tag removed") matches it and can send. Check the org’s workflows or confirm with the user before sweeping a large selection.

## Call

```ts
const result = await client.contacts.removeContactTags({ contactIds: ['<text>'], tagIds: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RemoveContactTagsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RemoveContactTagsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "removeTagsFromContacts": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
