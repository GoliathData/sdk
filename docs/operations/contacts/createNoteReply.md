<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createNoteReply

mutation · domain `contacts` · requires the WRITE scope

Reply to a note (getContact notes[]) as the key owner; AI employees cannot. Notifies the thread, by text too (a hidden note's: Goliath staff only). Returns the replies: find yours by author and createdAt.

## Call

```ts
const result = await client.contacts.createNoteReply({ noteId: '<id>', body: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateNoteReplyMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateNoteReplyMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "createNoteReply": {
      "id": true,
      "replies": {
        "id": true,
        "body": true,
        "createdAt": true,
        "author": {
          "kind": true,
          "id": true,
          "name": true
        }
      }
    }
  }
}
```
