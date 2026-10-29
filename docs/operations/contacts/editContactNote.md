<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# editContactNote

mutation · domain `contacts` · requires the WRITE scope

Rewrite an existing note's body (by noteId). REVERSIBLE: the note keeps its id and timeline position, so a wrong edit can be edited again, and no permission is needed when the user asked for a correction. Pass the FULL replacement body: it replaces the text, it does not append. noteIds come from getContact (notes[]) or a NOTE entry's note payload in listContactActivities; addContactNote returns none, so re-read the contact for the note you just wrote. The response echoes the saved body and updatedAt plus the owning contact (id + name): quote the corrected text back rather than assume it took. Only a note the key owner wrote, unless they are a team admin; a note whose `author.kind` is AI is someone else's, so a NON-ADMIN key is refused on one: check the author before offering to correct a note.

## Call

```ts
const result = await client.contacts.editContactNote({ noteId: '<id>', body: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<EditContactNoteMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `EditContactNoteMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `noteId` | `ID!` | yes | — |
| `body` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "noteMutation": {
    "editNote": {
      "id": true,
      "body": true,
      "updatedAt": true,
      "contact": {
        "id": true,
        "name": true
      }
    }
  }
}
```
