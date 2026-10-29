<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteContactNote

mutation · domain `contacts` · requires the WRITE scope

PERMANENTLY delete a note (by noteId): it leaves the contact's timeline with NO undo, so ALWAYS show its text and get their yes; a card counts. When only the wording is wrong use editContactNote, which is reversible. noteIds come from getContact (notes[]) or a NOTE entry in listContactActivities. One note per call; no bulk delete. Returns the owning contact with its REMAINING notes (the deleted one gone), so confirm the removal and show what is left rather than assert it worked. You can only delete a note you authored (or any note, if the key owner is a team admin); a note whose `author.kind` is AI is someone else's, so a NON-ADMIN key is refused on one.

## Call

```ts
const result = await client.contacts.deleteContactNote({ noteId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteContactNoteMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteContactNoteMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `noteId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "noteMutation": {
    "deleteNote": {
      "id": true,
      "name": true,
      "notes": {
        "id": true,
        "body": true,
        "createdAt": true
      }
    }
  }
}
```
