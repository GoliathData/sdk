<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# editNoteReply

mutation · domain `contacts` · requires the WRITE scope

Replace a reply's body (replyId from getContact notes[].replies); echoes the saved body. Same authorship rule as editContactNote.

## Call

```ts
const result = await client.contacts.editNoteReply({ replyId: '<id>', body: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<EditNoteReplyMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `EditNoteReplyMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `replyId` | `ID!` | yes | — |
| `body` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "noteMutation": {
    "editNoteReply": {
      "id": true,
      "body": true,
      "updatedAt": true
    }
  }
}
```
