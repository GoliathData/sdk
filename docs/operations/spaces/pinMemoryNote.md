<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# pinMemoryNote

mutation · domain `spaces` · requires the WRITE scope

Memory: pin (`pinned` true) or unpin a note. A pinned note rides in every agent memory block for its shelf; dreaming never changes a pin.

## Call

```ts
const result = await client.spaces.pinMemoryNote({ noteId: '<id>', pinned: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<PinMemoryNoteMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PinMemoryNoteMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `noteId` | `ID!` | yes | — |
| `pinned` | `Boolean!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "memoryPinNote": {
      "id": true,
      "pinned": true
    }
  }
}
```
