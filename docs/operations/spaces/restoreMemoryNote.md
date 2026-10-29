<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# restoreMemoryNote

mutation · domain `spaces` · requires the WRITE scope

Memory: bring a forgotten note back (`noteId` from getMemorySubjectNotes with `retired: true`).

## Call

```ts
const result = await client.spaces.restoreMemoryNote({ noteId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RestoreMemoryNoteMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RestoreMemoryNoteMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `noteId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "memoryRestoreNote": {
      "id": true,
      "pinned": true,
      "retired": true
    }
  }
}
```
