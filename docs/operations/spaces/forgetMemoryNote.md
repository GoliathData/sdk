<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# forgetMemoryNote

mutation · domain `spaces` · requires the WRITE scope

Memory: forget a note, with an optional `reason`. It moves to "Show retired" (getMemorySubjectNotes `retired: true`); restoreMemoryNote brings it back.

## Call

```ts
const result = await client.spaces.forgetMemoryNote({ noteId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ForgetMemoryNoteMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ForgetMemoryNoteMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `noteId` | `ID!` | yes | — |
| `reason` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "memoryForgetNote": true
  }
}
```
