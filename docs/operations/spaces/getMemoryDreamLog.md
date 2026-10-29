<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getMemoryDreamLog

query · domain `spaces` · requires the READ scope

Memory: what dreaming (the nightly pass that merges, rewrites and retires notes) did to one subject, only the newest `limit` entries (at most 50; no paging back, `hasMore` says older ones exist). Each entry's `id` is the `eventId` undoMemoryDream takes when `undoable`; `waiting` is a proposal nobody answered.

## Call

```ts
const result = await client.spaces.getMemoryDreamLog({ shelf: <SpacesMemoryShelf> })
// → Promise<GetMemoryDreamLogQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetMemoryDreamLogQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `shelf` | `SpacesMemoryShelf!` | yes | — |
| `subjectId` | `ID` | no | — |
| `limit` | `Int` | no | 25 |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesQuery": {
    "memoryDreamLog": {
      "entries": {
        "id": true,
        "verb": true,
        "summary": true,
        "reason": true,
        "at": true,
        "undoable": true,
        "undone": true,
        "waiting": true
      },
      "hasMore": true
    }
  }
}
```
