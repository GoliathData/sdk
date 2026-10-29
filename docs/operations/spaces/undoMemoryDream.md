<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# undoMemoryDream

mutation · domain `spaces` · requires the WRITE scope

Memory: undo one dreaming change (`eventId` from getMemoryDreamLog): what it retired or merged comes back, what it wrote is forgotten. On a waiting trust proposal it DECLINES the step. Accepting a trust step is not an operation: the person does it in the app. Refused when a later change depends on it.

## Call

```ts
const result = await client.spaces.undoMemoryDream({ eventId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UndoMemoryDreamMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UndoMemoryDreamMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `eventId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "memoryUndoDream": true
  }
}
```
