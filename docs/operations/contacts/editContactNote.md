<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# editContactNote

mutation · domain `contacts` · requires the WRITE scope

Rewrite the body of an existing note (by noteId). REVERSIBLE — the note keeps its id and timeline position, so a wrong edit can simply be edited again; you do not need to ask permission first when the user has asked for a correction. Pass the FULL replacement body: this replaces the text, it does not append. noteIds come from getContact (notes[]) or from the note payload on a NOTE entry in listContactActivities — addContactNote does not return one, so re-read the contact to find the note you just wrote. The response echoes the note's saved body and updatedAt plus the owning contact (id + name), so you can quote the corrected text back rather than assuming it took. You can only edit a note you authored (or any note, if the key owner is a team admin); editing someone else's note is refused. A note whose `author.kind` is AI counts as someone else's, so a NON-ADMIN key is refused on one — check the author before offering to correct a note (a team-admin key can edit it like any other).

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
