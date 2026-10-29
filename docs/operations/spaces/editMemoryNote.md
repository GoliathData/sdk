<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# editMemoryNote

mutation · domain `spaces` · requires the WRITE scope

Memory: correct a note's words (`noteId` from getMemorySubjectNotes). Saving pins it. The correction is a NEW note id, returned; the old words are superseded, not retired, so restoreMemoryNote cannot bring them back.

## Call

```ts
const result = await client.spaces.editMemoryNote({ noteId: '<id>', text: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<EditMemoryNoteMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `EditMemoryNoteMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `noteId` | `ID!` | yes | — |
| `text` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "memoryEditNote": {
      "id": true,
      "kind": true,
      "text": true,
      "pinned": true
    }
  }
}
```
