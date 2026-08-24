<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# unassignContact

mutation · domain `contacts` · requires the WRITE scope

Take teammates OFF contacts — the removal twin of assignContact, and the offboarding op ("Dana leaves Friday, take her off her contacts"). userIds is a LIST, so one call clears several teammates from the same selection; each named user is removed from every selected contact whatever their role (POINT_PERSON or PARTICIPANT), so this is not a way to demote someone — re-assign with assignContact(role: PARTICIPANT) for that. A user who is not on a contact is skipped, not failed. Async bulk job — returns a bulkTaskId to poll with getBulkTask; an immediate read-back will not show the change. It does not hand the work to a replacement, with ONE exception you must not report as a general rule: if the removal leaves EXACTLY ONE assignee behind and that person is a PARTICIPANT, they are automatically promoted to POINT_PERSON on that contact. Any other shape — nobody left, or two or more left — leaves the contact with no point person, so it drops out of the removed teammate’s queue without entering anyone else’s. Because the outcome differs per contact, do not state which teammates ended up owning what until you have re-read the contacts (getContact `participants`), and when the intent is a deliberate hand-off, follow with assignContact for the new owner rather than relying on the promotion.

## Call

```ts
const result = await client.contacts.unassignContact({ contactIds: ['<text>'], userIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UnassignContactMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UnassignContactMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[String!]!` | yes | — |
| `userIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "bulkUnassignUsersFromContacts": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
