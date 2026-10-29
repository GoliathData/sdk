<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteNoteReply

mutation · domain `contacts` · requires the WRITE scope

Delete a reply for good. Same authorship rule as editContactNote. Returns the replies left.

## Call

```ts
const result = await client.contacts.deleteNoteReply({ replyId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteNoteReplyMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteNoteReplyMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `replyId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "noteMutation": {
    "deleteNoteReply": {
      "id": true,
      "replies": {
        "id": true
      }
    }
  }
}
```
