<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addContactNote

mutation · domain `contacts` · requires the WRITE scope

Add a text note to a contact. Applied synchronously (the note is returned by getContact right away). The response is the OWNING CONTACT, not the note — `id` and `name` are the contact's — so report the name it gives back, never the name you searched for. Those differ more often than they look: contactId normally comes from a findContacts identity search, which ranks and can return a near match for a name that has no exact one. A run that searched for one contact, wrote to whatever ranked first, and then told the user the note landed on the name it searched for has reported a record it did not touch, and nothing downstream can catch that. If the echoed name is not the contact the user named, say so and offer to move the note rather than restating the name you were given. Returns no noteId — re-read the contact if you need one (see editContactNote).

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
