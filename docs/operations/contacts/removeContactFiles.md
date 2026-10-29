<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# removeContactFiles

mutation · domain `contacts` · requires the WRITE scope

Take files off a contact's Files & Photos by file id (a Library filing's `uploadedFileId`, or a `files[].id`), as the Files card's delete does. Returns the files the contact still has.

## Call

```ts
const result = await client.contacts.removeContactFiles({ contactId: '<text>', fileIds: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RemoveContactFilesMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RemoveContactFilesMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `String!` | yes | — |
| `fileIds` | `[String!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "updateContact": {
      "id": true,
      "files": {
        "id": true,
        "fileName": true
      }
    }
  }
}
```
