<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addContactNote

mutation · domain `contacts` · requires the WRITE scope

Add a text note to a contact, synchronously (getContact returns it at once). The response is the OWNING CONTACT, not the note (`id` and `name` are the contact's), so report the name it gives back, never the name you searched for. They differ more often than they look: contactId usually comes from a findContacts search, which ranks and can return a near match for a name with no exact one. A run that wrote to the top row and told the user the note landed on the searched name has reported a record it did not touch, which nothing downstream catches. If the echoed name is not the contact the user named, say so and offer to move the note. Returns no noteId: re-read getContact notes[] for one (see editContactNote).

## Call

```ts
const result = await client.contacts.addContactNote({ contactId: '<id>', body: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddContactNoteMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddContactNoteMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |
| `body` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "noteMutation": {
    "createNote": {
      "id": true,
      "name": true
    }
  }
}
```
